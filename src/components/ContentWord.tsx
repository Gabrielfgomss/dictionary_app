import { ReactNode } from 'react';

function ContentWord({ meanings, children }: { meanings: [{ definition: string }], children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-zinc-400 font-light text-lg">Meaning</p>
      <ul className="list-disc marker:text-purple-900 ml-5 md:ml-10">
        {meanings.map((item, index) => <li key={index}>{item.definition}</li>)}
      </ul>
      {children}
    </div>
  );
}

export default ContentWord;
