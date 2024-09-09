import TreeList from "./Tree-List";
import "./Style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view">
      <div className="headline">
        <h1 >Tree View </h1>
        <h4>Click on Arrow ...</h4>
      </div>

      <TreeList list={menus} />
    </div>
  );
}
