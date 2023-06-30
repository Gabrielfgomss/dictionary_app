import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { TogglePlay } from './AnimateComponents.tsx';
import ContentWord from './ContentWord.tsx';
import { RootState } from '../store.ts';

interface ItemProps {
  partOfSpeech: string,
  word: string,
  definitions: [{ definition:string, example?: string }],
  synonyms: string[]
}

function MainContent() {
  const {
    word, phonetics, meanings, audio, error
  } = useSelector((state: RootState) => state.word);
  console.log(meanings);
  if (error !== '') return <p className="text-2xl text-zinc-500 text-center font-semibold">{error}</p>;

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold lg:text-6xl capitalize">{word}</h1>
          <p className="text-purple-700 col-start-1">{phonetics}</p>
        </div>
        {audio !== undefined && <TogglePlay audio={audio} />}
      </div>
      {meanings.map((item: ItemProps, index) => (
        <Fragment key={index}>
          <div key={item.partOfSpeech} className="flex items-center gap-6">
            <h2 className="font-bold">{item.partOfSpeech}</h2>
            <span className="w-full border-t-2 border-zinc-200" />
          </div>
          <ContentWord
            key={item.word}
            meanings={item.definitions}
          >
            {item.synonyms.length !== 0
              ? (
                <div key={`${item.word}1`} className="flex gap-4">
                  <p className="text-zinc-400 font-light text-lg w-fit">Synonyms</p>
                  <p className="text-violet-600 font-bold text-lg w-fit">{item.synonyms[0]}</p>
                </div>
              ) : null}
            {item.definitions.filter(
              (item) => {
                if (item.example !== undefined) {
                  return item;
                }
                return '';
              }
            ).map((item) => <p key={item.example} className="text-zinc-400 font-light text-base start-3 w-fit ml-10">{`"${item.example}"`}</p>)}
          </ContentWord>
        </Fragment>
      ))}
      <div className="w-full border-t-2 border-zinc-200 mb-5" />
    </>
  );
}

export default MainContent;
