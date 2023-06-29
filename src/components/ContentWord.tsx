function ContentWord({ meanings, children }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-zinc-400 font-light text-lg">Meaning</p>
      <ul className="list-disc marker:text-purple-900 ml-5 md:ml-10">
        {meanings.map((item) => <li key={item.definition}>{item.definition}</li>)}
      </ul>
      {children}
    </div>
  );
}

export default ContentWord;
