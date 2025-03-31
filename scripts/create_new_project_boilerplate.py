import os, sys

# LOCATION OF THIS SCRIPT
SCRIPT_DIRECTORY = os.path.dirname(__file__)

def look_for_docs_directory(levels_up = 3):
    
    """
    This function looks 2 levels up by default  
    you can increase the level but JUST DONT BE A MORON !!  
    its easier to position the script better!!!  
    """
    docs_dir = None
    
    # scripts directory
    script_dir = SCRIPT_DIRECTORY
    
    # levels up to look
    for _ in range (levels_up):
                
        # walk the entire path
        for root, dirs, files in os.walk(script_dir):
            
            # walk the directories and look for the docs folder
            for dirname in dirs:
                if dirname.lower() == 'docs':
                    docs_dir = os.path.join(root, dirname)
                    print(f'\ndocs found at: {docs_dir}')
                    return docs_dir
        script_dir = os.path.dirname(script_dir)
    
    if not docs_dir:
        print('\n CRITICAL ERROR: docs directory not found ')
        sys.exit()
        
    return  docs_dir

# folder name
try:
    new_directory_name = sys.argv[1]
    project_title = sys.argv[2]
except IndexError:
    
    print ('\nMissing CLI arguments for the directory name and project title')
    
    new_directory_name = input("\nInput Directory Name: ")
    project_title = input("\nInput tab title for project: ")
    
    if new_directory_name == "" or project_title == "":
        print("\nEmpty Strings for one argument, Exiting process")


DOCS_DIRECTORY = look_for_docs_directory()
ABS_PATH_TO_NEW_DIRECTORY = os.path.join( DOCS_DIRECTORY, new_directory_name)

print(f"\nNew Project Directory: {ABS_PATH_TO_NEW_DIRECTORY} ")


# creating directory
try:
    os.makedirs( ABS_PATH_TO_NEW_DIRECTORY )
    
except FileExistsError:
    print('\nDirectory already exists, Exiting Process')
    sys.exit()


# SOURCE FILES FOR COPY
INPUT_HTML_FILE =  os.path.join( SCRIPT_DIRECTORY, 'templates/index.html' )
INPUT_CSS_FILE =  os.path.join( SCRIPT_DIRECTORY, 'templates/styles.css' )
INPUT_JS_FILE =  os.path.join( SCRIPT_DIRECTORY, 'templates/script.js' )

# TARGET FILES AND DESTINATION
OUTPUT_HTML_FILE = os.path.join( ABS_PATH_TO_NEW_DIRECTORY, 'index.html' )
OUTPUT_CSS_FILE = os.path.join( ABS_PATH_TO_NEW_DIRECTORY, 'styles.css' )
OUTPUT_JS_FILE = os.path.join( ABS_PATH_TO_NEW_DIRECTORY, 'script.js' )



print(f"\ndocs/{new_directory_name} created sucessfully")
# WORKING ON HTML FILE
with open( INPUT_HTML_FILE ) as html_file , open( OUTPUT_HTML_FILE, 'w' ) as out_html_file :     
    template_string = html_file.read()
    template_string = template_string.replace('Project Title', project_title)
    out_html_file.write(template_string)
    print('HTML file created successfully')

# WORKING ON CSS FILE
with open( INPUT_CSS_FILE ) as html_file , open( OUTPUT_CSS_FILE, 'w' ) as out_css_file :     
    template_string = html_file.read()
    out_css_file.write(template_string)
    print('CSS file created successfully')
    
    
# WORKING ON JS FILE
with open( OUTPUT_JS_FILE, 'w' ) as out_js_file :
    print('JS file created successfully')
    pass

