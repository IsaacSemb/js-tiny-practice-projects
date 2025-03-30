import os


def look_for_docs_directory(levels_up = 3):
    
    """
    This function looks 2 levels up by default  
    you can increase the level but JUST DONT BE A MORON !!  
    its easier to position the script better!!!  
    """
    docs_dir = None
    
    # scripts directory
    script_dir = os.path.dirname(__file__)
    
    # levels up to look
    for _ in range (levels_up):
                
        # walk the entire path
        for root, dirs, files in os.walk(script_dir):
            
            # walk the directories and look for the docs folder
            for dirname in dirs:
                if dirname == 'docs':
                    docs_dir = os.path.join(root, dirname) 
                    return docs_dir
        script_dir = os.path.dirname(script_dir)
        
    return  docs_dir


