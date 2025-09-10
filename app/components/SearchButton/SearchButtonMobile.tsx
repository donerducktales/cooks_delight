"use client";

import useSearchStore from "@/lib/features/states/searchStore";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ObjectId, WithId } from "mongodb";
import { useRouter } from "next/navigation";
import { Dispatch, useState } from "react";

interface ResultsButtonType {
  _id: ObjectId;
  title: string;
  type: string;
}

const SearchButtonMobileForm = ({
  handleSubmit,
  handleChange,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form
      className={`w-full flex flex-row mt-4 rounded-2xl ${"searchMobile"}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={`w-full outline-none bg-background bg-opacity-10 text-light h-9 mr-4 pl-2 pr-2 rounded-2xl`}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={`min-w-9 bg-background bg-opacity-10 rounded-2xl hover:bg-primaryLightBlue text-background hover:text-dark flex justify-center items-center`}
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

const ResultsButton = ({
  open,
  result,
  handleClick,
}: {
  open: boolean;
  result: WithId<ResultsButtonType>[];
  handleClick: (title: string) => void;
}) => {
  return (
    open && (
      <div
        className={`resultsButton flex flex-col bg-light/10 mt-4 rounded-3xl z-20`}
      >
        {result.map((el) => (
          <button
            key={el._id.toString()}
            onClick={() => handleClick(el.title)}
            className={`resultsButtonElem border-b border-light p-2 text-start text-lg w-full z-10 last:border-none text-light font-medium`}
          >
            {el.title}
            <p className="text-sm">{el.type}</p>
          </button>
        ))}
      </div>
    )
  );
};

export default function SearchButtonMobile({
  setOpen,
  open,
}: {
  setOpen: Dispatch<boolean>;
  open: boolean;
}) {
  const { value, fetchResults, setValueRequest, setSearchValue } =
    useSearchStore();
  const router = useRouter();
  const [result, setResult] = useState<WithId<ResultsButtonType>[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      fetchResults(value);
      router.push("/searchResult");
      setValueRequest();
      setOpen(false);
    } catch (error) {
      alert(`${error}`);
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);

    if (!newSearchValue.trim()) {
      setResult([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?searchValue=${newSearchValue}`);

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.error("error while fetching", error);
      setResult([]);
    }
  }

  function handleClick(title: string) {
    try {
      fetchResults(title);
      setSearchValue(title);
      setResult([]);
      setOpen(false);
      setValueRequest();
      router.push("/searchResult");
    } catch (error) {
      alert(`${error}`);
    }
  }

  return (
    <>
      <SearchButtonMobileForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ResultsButton open={open} result={result} handleClick={handleClick} />
    </>
  );
}
