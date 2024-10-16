import { Mosaic, MosaicWindow } from "react-mosaic-component";
import WindowContent from "./WindowContent";

const MosaicLayout = () => {
  return (
    <Mosaic
      renderTile={(_, path) => (
        <MosaicWindow path={path} title="Company info">
          <WindowContent />
        </MosaicWindow>
      )}
      initialValue={{
        direction: "row",
        first: "a",
        second: {
          direction: "column",
          first: "b",
          second: "c",
        },
      }}
    />
  );
};

export default MosaicLayout;
