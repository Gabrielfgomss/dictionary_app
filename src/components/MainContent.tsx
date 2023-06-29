import { TogglePlay } from './AnimateComponents.tsx';
import ContentWord from './ContentWord.tsx';

function MainContent({ word, phonetics, meanings }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold lg:text-6xl capitalize">{word}</h1>
          <p className="text-purple-700 col-start-1">{phonetics.text}</p>
        </div>
        <TogglePlay audio={phonetics.audio} />
      </div>
      {meanings.map((item, index, array) => (
        <>
          <div className="flex items-center gap-6">
            <h2 className="font-bold">{item.partOfSpeech}</h2>
            <span className="w-full border-t-2 border-zinc-200" />
          </div>
          <ContentWord
            meanings={item.definitions}
            // synonymous={item.synonyms}
          >

            {index === 0
              && (
              <>
                <p className="text-zinc-400 font-light text-lg w-fit">Synonyms</p>
                <ul className="list-disc marker:text-purple-900 ml-5 md:ml-10">
                  { item.synonyms.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
              )}

            {index === (array.length - 1) && item.definitions.map(
              (item) => (
                <p key={item.definition} className="text-zinc-400 font-light text-base start-3 w-fit ml-10">"{item.definition}"</p>
              )
            )}
          </ContentWord>
        </>
      ))}
    </>
  );
}

export default MainContent;
