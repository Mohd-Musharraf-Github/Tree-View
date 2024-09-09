import TreeItem from "./Tree-Item";

export default function TreeList({ list = [] }) {
  return (
    <ul className="tree-list">
      {list && list.length > 0
        ? list.map((Listitem) => <TreeItem item={Listitem} />)
        : null}
    </ul>
  );
}
