SET curr_dir=%cd%

CHDIR api
 
CALL create_modules.cmd
CALL run_server.cmd

CHDIR %curr_dir%