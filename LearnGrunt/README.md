Install Node

npm install -g grunt-cli

create folder and run following command to install grunt in that folder
- npm install grunt --save-dev

install first plugin  - clean - allows to empty folders
- npm install grunt-contrib-clean --save-dev

Create Gruntfile.js
-- add grunt load npm task 
-- add grunt register task

Apply uglify plugin
npm install grunt-contrib-uglify --save-dev

Can run  any task by passing the task name as CLI argument 
-- grunt clean ///only clean command will be executed
-- in options you can specify files or folders list. 
-- folders list will delete the folder.
-- grunt clean:folders ///only folders part of clean command will be executed


Apply html hint plugin to validate html
npm install grunt-htmlhint --save-dev

