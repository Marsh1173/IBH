type ImageName = "character";

export class ImageAssetManager {
    private static imageToUrlMap: Record<ImageName, string> = {
        character: "images/character.png",
    };
    private static blankImage = document.createElement("img");

    public static readonly images = Object.fromEntries(
        Object.keys(ImageAssetManager.imageToUrlMap).map((key) => [key, ImageAssetManager.blankImage]),
    ) as Record<ImageName, HTMLImageElement>;

    public async load(): Promise<void> {
        await Promise.all(
            Object.keys(ImageAssetManager.images).map(
                (img: string) =>
                    new Promise<HTMLImageElement>((resolve, reject) => {
                        const imgElement = document.createElement("img");
                        imgElement.onload = () => {
                            ImageAssetManager.images[img as ImageName] = imgElement;
                            resolve(imgElement);
                        };
                        const failed = () => {
                            reject();
                        };
                        imgElement.onerror = failed;
                        imgElement.onabort = failed;
                        imgElement.src = ImageAssetManager.imageToUrlMap[img as ImageName];
                    }),
            ),
        );
        console.log("Done");
    }
}
