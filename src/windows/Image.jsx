import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>
            <div className="p-2 bg-black h-[calc(100%-3rem)] flex items-center justify-center">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={name}
                        className="max-w-full max-h-full object-contain"
                    />
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
