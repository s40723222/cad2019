var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Weeks 2~5 \n Weeks 6~9 \n Weeks 10~14 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n Weeks 15~18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Weeks 2~5', 'text': 'Week 2 \n 先下載 2019Fall可攜式套件.7z ，並解壓縮，道 github 網站建立新的repository，建立時要勾選Initialize this repository with a README，建立完成後將倉儲git clone下來。 輸入git config --global user.name""、git config --global user.email""、git config --global http.proxy [2001:288:6004:17::7]:3128。 輸入git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde，進入cmsimde\\up_dir資料夾裡面，將所有檔案抓出來cad2019資料夾裡。 開啟網站並修改標題後上傳到github倉儲裡。 \n Week 3 \n 用git version檢查git的版本 將Y:\\portablegit\\bin\\sh.exe改名成sh_rename_for_solvespace.exe 用git clone\xa0--recurse-submodules取得子模組 git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 手動進行libpng.dll.a的編譯，改名為 libpng_static.a放到編譯系統的lib目錄中。 cd solvespace、cd extlib、cd libpng、mkdir build、cd build cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib 在solvespace建造並進入build目錄，執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release、mingw32-make Solvespace 986da7d Solvespace.exe Solvespace 22e4011 \n Week 4 \n 觀看\xa0 solvespace tutorials \n Week 5 \n 用 solvespace 進行繪圖 \n \n', 'tags': '', 'url': 'Weeks 2~5.html'}, {'title': 'Weeks 6~9', 'text': 'Week 6 \n 用繪圖軟體 Solvespace 編譯，零組件繪圖 \n \n 將零組件轉入 v-rep3\xa0進行運動組立後，以 Lua 或 Python 進行控制。 \n \n Week7 \n slovespace-1 \n \n slovespace-2 \n \n solvespace-3 \n \n solvespace-4 \n \n solvespace-5 \n \n solvespace-6 \n \n Week8 \n 開啟 blog 開啟python，將leo打開 將 blog 的網址複製到\xa0@path . ./\xa0-->Pelican 設定-->遠端中 SITEURL 將底下的\xa0DISQUS_SITENAME\xa0改為自己的學號 在\xa0local_blog\xa0點選右鍵，點選goto script，將指令複製起來後，存儲 道 python 輸入指令，完成 \n 導入 webots 下載  webots_2019b_rev1.7z \xa0，並解壓縮至Y槽 將隨身系統中的 start_mdecourse.bat 複製一個並改名 start_webots.bat 打開編譯器，將 start_mdecourse.bat 指令複製到 start_webots.bat 輸入 \xa0 set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \xa0 start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe 重新啟動後，極可使用 start_webots.bat 開啟webots \n ssh 對 github 的連線 將 Y:\\portablegit\\bin 下的 sh_for_solvespace_compile.exe 複製並重新命名為 sh.exe 將 python 打開並輸入 sh 在 Y:\\home_mdecourse 建立一個資料夾 .ssh 再打完 sh 的編輯器裡輸入 ssh-keygen -t rsa\xa0 -b 4096 -C "使用者學號" 下載  putty.7z \xa0放進Y槽裡並解壓縮 編譯 star_mdecourse.bat ，加入以下指令 set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 將倉儲的 .git 裡面 config 中的 url 改成 ssh 形式 將 python.exe ，設定 proxy 的路徑並存檔 在到 github 存入自己的 key ，就完成 ssh 對 github 的連線 \n', 'tags': '', 'url': 'Weeks 6~9.html'}, {'title': 'Weeks 10~14', 'text': '', 'tags': '', 'url': 'Weeks 10~14.html'}, {'title': 'Weeks 15~18', 'text': 'Week15 \n \n', 'tags': '', 'url': 'Weeks 15~18.html'}, {'title': 'Note', 'text': 'Solvespace 快捷鍵 \n \n \n \n \n D \n 長度設定 \n \n N \n 角度設定 \n \n \n \n H \n 水平限制 (左右疊合) \n \n V \n 垂直限制 (上下疊合) \n \n \n \n L \n 平行限制 (無交角) \n \n [ \n 垂直限制 (90°) \n \n \n \n O \n 重疊 (點在線上) \n \n Y \n 對稱中心點 \n \n \n \n Q \n 等長限制 \n \n X \n 物件平行 \n \n \n \n U \n \n 其他輔助角 \n \n \n E \n 切換參考尺寸 \n \n \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules\xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};