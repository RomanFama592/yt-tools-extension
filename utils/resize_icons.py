from pathlib import Path
from PIL import Image

def resize_image_in_half(input_path, output_path):
    original_image = Image.open(input_path)

    resized_image = original_image.resize((original_image.size[0]//2, original_image.size[1]//2))

    resized_image.save(output_path)

input_path = Path("public", "icons")

input_image_path = Path(input_path, "icon128.png")

list_images = [input_image_path, Path(input_path, "icon64.png"), Path(input_path, "icon32.png")]

for index, image in enumerate(list_images):
    if list_images[-1] == image:
        resize_image_in_half(image, Path(input_path, "icon16.png"))
    else:
        resize_image_in_half(image, list_images[index+1])