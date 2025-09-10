"use client";

import useViewPortSize from "@/app/assets/customHooks/useViewPortSize";
import useSearchStore from "@/lib/features/states/searchStore";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { ObjectId, WithId } from "mongodb";
import { useRouter } from "next/navigation";
import { Dispatch, useEffect, useState } from "react";

interface ResultsButtonType {
  _id: ObjectId;
  title: string;
  type: string;
}

const SearchButtonForm = ({
  toggle,
  handleSubmit,
  handleChange,
}: {
  toggle: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    toggle && (
      <form
        onSubmit={handleSubmit}
        className={`flex flex-row bg-dark bg-opacity-10 rounded-s-2xl ${"searchForm"}`}
      >
        <button
          type="submit"
          className={`w-9 hover:bg-primaryLightBlue flex flex-row justify-center items-center rounded-2xl ${"submitSearchButton"}`}
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
        <input
          type="text"
          className={`max-w-32 h-9 outline-none rounded-s-2xl pr-2 ml-2 bg-dark bg-opacity-0`}
          onChange={handleChange}
        />
      </form>
    )
  );
};

const ToggleButton = ({
  toggle,
  setToggle,
  setResult,
}: {
  toggle: boolean;
  setToggle: Dispatch<boolean>;
  setResult: Dispatch<WithId<ResultsButtonType>[]>;
}) => {
  return (
    <div
      className={`bg-dark bg-opacity-10 ${
        toggle ? "rounded-e-2xl" : "rounded-2xl"
      } ${"searchButtonToggle"}`}
    >
      <button
        className={`w-9 h-9 flex justify-center items-center ${
          toggle ? "bg-primaryRed rounded-2xl" : "bg-dark rounded-2xl"
        } ${!toggle && "bg-opacity-10"} ${"searchButtonSwitch"}`}
        onClick={() => {setToggle(!toggle); setResult([])}}
      >
        {toggle ? (
          <XMarkIcon className="w-6 h-6 text-background" />
        ) : (
          <MagnifyingGlassIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

const ResultsButton = ({
  result,
  toggle,
  handleClick,
}: {
  result: WithId<ResultsButtonType>[];
  toggle: boolean;
  handleClick: (title: string) => void;
}) => {
  return (
    toggle && (
      <div
        className={`resultsButton flex flex-col bg-background absolute top-10 z-10 rounded-b-xl w-full`}
      >
        {result.map((el) => (
          <button
            key={el._id.toString()}
            onClick={() => handleClick(el.title)}
            className={`$ resultsButtonElem border-b border-dark border-opacity-25 p-2 text-start text-sm w-full last:border-none`}
          >
            {el.title}
            <p className="text-xs text-dark text-opacity-80">{el.type}</p>
          </button>
        ))}
      </div>
    )
  );
};

export default function SearchButton() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [result, setResult] = useState<WithId<ResultsButtonType>[]>([]);
  const router = useRouter();
  const windowSize = useViewPortSize();
  const { value, fetchResults, setValueRequest, setSearchValue } =
    useSearchStore();

  useEffect(() => {
    if (windowSize.width < 1024) {
      setToggle(false);
    }
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      fetchResults(value);
      setValueRequest();
      setToggle(false);
      setResult([]);
      router.push("/searchResult");
    } catch (error) {
      alert(`${error}`);
    }
  }

  function handleClick(title: string) {
    try {
      fetchResults(title);
      setSearchValue(title);
      setToggle(false);
      setResult([]);
      setValueRequest();
      router.push("/searchResult");
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

  return (
    <div className={`searchPanel flex flex-col items-center relative`}>
      <div
        className={`flex flex-row justify-center relative z-40 ${"searchButtonWrapper"}`}
      >
        <SearchButtonForm
          toggle={toggle}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <ToggleButton toggle={toggle} setToggle={setToggle} setResult={setResult} />
      </div>
      <ResultsButton result={result} toggle={toggle} handleClick={handleClick} />
    </div>
  );
}
