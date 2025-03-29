import os


def look_for_docs_directory(levels_up = 3):
    
    """
    This function looks 2 levels up by default  
    you can increase the level but JUST DONT BE A MORON !!  
    its easier to position the script better!!!  
    """
    
    # scripts directory
    script_dir = os.path.dirname(__file__)
    
    # levels up to look
    for _ in range (levels_up):
                
        # walk the entire path
        for root, dirs, files in os.walk(script_dir):
            
            # walk the directories and look for the docs folder
            for dirname in dirs:
                print(dirname)
                if dirname == 'docs':
                    return os.path.join(root, dirname)
        script_dir = os.path.dirname(script_dir)
        
    return  'Not Found'


