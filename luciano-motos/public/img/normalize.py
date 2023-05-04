import os
import shutil
from PIL import Image

# set the folder path
current_path = os.getcwd()
folder_path = current_path

# Define the target directory path
target_dir = os.path.join(folder_path, "target_folder")

# Create target directory if it does not exist
if not os.path.exists(target_dir):
    os.makedirs(target_dir)

print(folder_path)
# loop through all files in the folder
i = 0
for filename in os.listdir(folder_path):
    filepath = os.path.join(folder_path, filename)
    
    # check if the file is a JPEG or PNG image
    if filename.endswith(".jpg") or filename.endswith(".png"):
        
        # open the image and get its dimensions
        with Image.open(filepath) as im:
            width, height = im.size
            
            # if the image dimensions are 1350x900, rename the file
            if width == 1350 and height == 900:
                new_filename = f"landing_"+str(i)+".jpg"
                new_file_path = os.path.join(target_dir, new_filename)
                shutil.copyfile(filepath, new_file_path)
                print(f"Renamed {filename} to {new_filename}")
                i = i+1 #Increase index
