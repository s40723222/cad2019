var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Weeks 2~5 \n Weeks 6~9 \n Weeks 10~14 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n Weeks 15~18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Weeks 2~5', 'text': 'Week 2 \n 先下載 2019Fall可攜式套件.7z ，並解壓縮，道 github 網站建立新的repository，建立時要勾選Initialize this repository with a README，建立完成後將倉儲git clone下來。 輸入git config --global user.name""、git config --global user.email""、git config --global http.proxy [2001:288:6004:17::7]:3128。 輸入git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde，進入cmsimde\\up_dir資料夾裡面，將所有檔案抓出來cad2019資料夾裡。 開啟網站並修改標題後上傳到github倉儲裡。 \n Week 3 \n 用git version檢查git的版本 將Y:\\portablegit\\bin\\sh.exe改名成sh_rename_for_solvespace.exe 用git clone\xa0--recurse-submodules取得子模組 git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 手動進行libpng.dll.a的編譯，改名為 libpng_static.a放到編譯系統的lib目錄中。 cd solvespace、cd extlib、cd libpng、mkdir build、cd build cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib 在solvespace建造並進入build目錄，執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release、mingw32-make Solvespace 986da7d Solvespace.exe Solvespace 22e4011 \n Week 4 \n 觀看\xa0 solvespace tutorials \n Week 5 \n 用 solvespace 進行繪圖 \n \n', 'tags': '', 'url': 'Weeks 2~5.html'}, {'title': 'Weeks 6~9', 'text': 'Week 6 \n 用繪圖軟體 Solvespace 編譯，零組件繪圖 \n \n 將零組件轉入 v-rep3\xa0進行運動組立後，以 Lua 或 Python 進行控制。 \n \n Week7 \n slovespace-1 \n \n slovespace-2 \n \n solvespace-3 \n \n solvespace-4 \n \n solvespace-5 \n \n solvespace-6 \n \n Week8 \n 開啟 blog 開啟python，將leo打開 將 blog 的網址複製到\xa0@path . ./\xa0-->Pelican 設定-->遠端中 SITEURL 將底下的\xa0DISQUS_SITENAME\xa0改為自己的學號 在\xa0local_blog\xa0點選右鍵，點選goto script，將指令複製起來後，存儲 道 python 輸入指令，完成 \n 導入 webots 下載  webots_2019b_rev1.7z \xa0，並解壓縮至Y槽 將隨身系統中的 start_mdecourse.bat 複製一個並改名 start_webots.bat 打開編譯器，將 start_mdecourse.bat 指令複製到 start_webots.bat 輸入 \xa0 set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \xa0 start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe 重新啟動後，極可使用 start_webots.bat 開啟webots \n ssh 對 github 的連線 將 Y:\\portablegit\\bin 下的 sh_for_solvespace_compile.exe 複製並重新命名為 sh.exe 將 python 打開並輸入 sh 在 Y:\\home_mdecourse 建立一個資料夾 .ssh 再打完 sh 的編輯器裡輸入 ssh-keygen -t rsa\xa0 -b 4096 -C "使用者學號" 下載  putty.7z \xa0放進Y槽裡並解壓縮 編譯 star_mdecourse.bat ，加入以下指令 set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 將倉儲的 .git 裡面 config 中的 url 改成 ssh 形式 將 python.exe ，設定 proxy 的路徑並存檔 在到 github 存入自己的 key ，就完成 ssh 對 github 的連線 \n', 'tags': '', 'url': 'Weeks 6~9.html'}, {'title': 'Weeks 10~14', 'text': 'Week10 \n 進行分組 \n Week12 \n 分批進行翻譯 \n 第9章－製造 \n 正如我們在第1章中討論的有關產品實現過程， 模型和圖紙的內容由設計師創建的產品將經過製造過程才能達到最終產品， 是CAD / CAM集成的本質。 最廣泛使用的技術是生成用於數控機床銑削所需零件的控制代碼。 這種技術減少了創建CNC代碼時需要進行大量的人工編程， 這有助於設計人員創建具有復雜幾何形狀的產品。 在本章中，我們將介紹NX 12生成用於3軸立式加工中心的CNC代碼。 該模塊使我們能夠對鑽孔，銑削，車削和線切割EDM工具路徑進行編程並進行一些後處理。 \n 9.1開始 \n 在將每個CAD模型移入模型之前，需要執行一些準備步驟。 在本章中，我們將使用在以前的運動問題。 在此模型中，所有單位均以毫米為單位，並且進行組件的製造。 在開始之前，如果可以成為CAM高級角色。為此，請轉到角色資源欄上的菜單。 單擊內容和列表將彈出可供CAM Advanced角色使用的選項如圖所示。 \n 9.1.1創建空白 \n 完成建模後，您應該決定需要裝載的原材料形狀和尺寸用於實際製造的機器。 此數據必須是NX 12中的輸入。 可以通過兩種方式實現。 第一種方法是創建或導入原始模型材質在同一文件中作為單獨的實體並分配像空白一樣堅實。 第二種方法是讓NX確定設計零件的極限尺寸的一些偏移值（如果需要）。 後面的方法允許快速分配尺寸詳細信息， 但是它只能用於棱柱形狀。 \n ➢在第4章中打開文件Die_cavity.prt以解決運動問題 \n ➢要創建坯料，請插入以下尺寸的塊 長度= 150毫米 寬度= 100毫米 高度= 80毫米 \n ➢對於“原點”選項，選擇基本塊的最低角，以便新 創建的塊可以包裝整個以前的模型，如下所示 該塊包含整個設計部分，因此我們需要更改該塊的顯示屬性 以獲得更好的可視化效果。 \n ➢單擊視圖選項卡的可視化組中的編輯對象顯示圖標 \n ➢選擇剛創建的塊，然後單擊確定。 \n ➢彈出窗口時，更改顯示顏色並將透明度更改為50 \n ➢點擊確定 \n ➢右鍵單擊零件瀏覽器中的塊，然後隱藏剛剛創建的塊。 單擊“隱藏”（您可能需要使用“從列表中選擇...”來選擇空白）。 這將使原始塊將從工作環境中消失。 \n 9.1.2設置加工環境 \n 現在我們準備進入製造模塊。 \n ➢選擇文件→新建→製造→銑削車削 \n ➢有許多不同的定制CAM模板可用於不同的加工操作。 在這裡，我們僅對銑削操作感興趣。 \n 9.1.3操作導航器 \n 進入製造環境後，您會發現主要屏幕， 例如顯示的新圖標。 \n ➢單擊資源欄左側的“操作導航器”選項卡操作導航器提供有關已創建程序和相應程序的信息有關刀具， 方法和策略的信息。程序列表可以用不同的方式查看分類列表。 在“操作導航器”中有四種查看程序列表的方法， 它們是“程序順序”視圖，“機床”視圖，“幾何”視圖和“加工方法”視圖。 \n ➢單擊幾何視圖 \n 9.1.4機器坐標系（MCS） \n ➢單擊插入組中的創建幾何圖標啟動編程設置 您將看到“創建幾何體”彈出對話框。 \n ➢點擊確定 另一個彈出窗口將允許您設置MCS哪裡都行。 默認情況下，NX 12採用原始絕對CS作為MCS。 \n ➢單擊確定選擇默認選項作為MCS \n 9.1.5幾何定義 \n ➢單擊幾何視圖 \n ➢通過點擊在操作導航的“+”號，展開MCS_MAIN_SPINDLE \n ➢在操作導航器中雙擊WORKPIECE_MAIN。 如果看不到嘗試點擊相關的“ +”號彈出窗口Workpiece Main出現。 您可以在此處分配零件幾何， 毛坯幾何和檢查幾何。 \n ➢單擊零件圖標 \n ➢選擇設計部分，然後單擊好 現在，我們將選擇“空白幾何”。 \n ➢單擊空白圖標 這將打開“空白幾何體”窗口。 如前所述，有幾種方法可以定義空白。 您可以將實體幾何用作空白，也可以允許軟件分配棱柱形在X，Y和Z方向上具有所需偏移量的塊。 因為我們已經創建了一個塊，所以這裡我們可以將其用作空白幾何。 \n ➢單擊塊，然後按確定 現在，我們已經完成了零件幾何和毛坯幾何的分配。 有時可能需要分配檢查幾何。 此選項對於更複雜或5軸的形狀更有用銑削操作中， 刀具的切削力較高。 在我們的在這種情況下，不必分配檢查幾何。 \n ➢單擊確定退出工件主窗口 \n 9.2創建操作 \n 9.2.1創建新操作 \n 現在可以進行製造設置，以供我們進一步使用編程策略進行工作。 那裡編程涉及許多不同的製造策略， 需要實踐才能知道哪一個是最佳的。 這裡給出了最廣泛和最常用的基本準則策略。 本章還將介紹一些重要的參數，這些參數將為程序正常運行。 \n ➢單擊工具欄中的創建操作圖標彈出創建操作窗口。 \n ➢確保操作類型為Mill_ContourMill-Contour下有一組不同的子類型， 即腔磨，Z級跟隨腔，跟隨核心，固定輪廓等。 這些不同的子類型用於不同的情況，並且設計零件的輪廓。 如前所述，你如何根據特定情況選擇策略知識和經驗。 \n ➢單擊左上方的Cavity_Mill圖標，如下所示： 如圖所示 \n ➢選擇程序為1234 \n ➢將幾何更改為WORKPIECE_MAIN \n ➢點擊確定 程序參數窗口中的Cavity Mill標題欄將會彈出。 在此窗口中，您可以設置所有該程序的參數。 簡要介紹我們將給出重要的參數和術語通過序列。 \n 9.2.2工具創建和選擇 \n 要做的最重要的決定之一就是選擇具有正確形狀和尺寸的工具以供使用。 在開始工具參數設置之前，我們必須首先了解工具的類型刀具。 銑刀刀具分為三種形式的刀具。 因此，當選擇對於刀具，重要的是要考慮設計零件的尺寸，形狀和輪廓。 例如，如果型腔的拐角半徑為5毫米，則該型腔應由切割機完成直徑小於或等於10毫米。 否則會在角落留下材料。 那裡是市場上提供的其他特殊形式的刀具，這些刀具可以滿足不同的需求。 \n 平面銑刀 這些切刀在切刀的末端具有鋒利的尖端。 這些刀具用於精加工具有垂直壁平坦的零件，在地板和牆壁。 \n 球頭立銑刀 這些刀具的轉角半徑恰好等於刀柄直徑的一半。 這形成了球形輪廓。 這些刀具用於零件的粗加工和精加工或具有自由形狀特徵的表面。 \n 牛鼻刀 這些刀具的角半徑小，被廣泛用於粗加工和/或半精加工。 零件以及傾斜和錐形牆的精加工。 \n 我們將用來磨光這麼大體積的刀具是BUEM12X1（Bullnose End直徑為12且半徑為1的銑刀）。 \n ➢在型腔銑削彈出菜單中，單擊“工具”對話框中的“新建”按鈕。 \n ➢點擊新建 \n ➢在新工具窗口中，選擇銑削圖標 \n ➢輸入BUEM12X1作為名稱並單擊好這將打開另一個窗口進入切紙器尺寸和參數。 您也可以自定義您通常使用和調用的工具列表庫中預定義的刀具。 \n ➢輸入如下圖所示的值    Diameter\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa012.0000  Lower Radius\xa0 \xa0 \xa0 \xa0 1.0000  Taper Angle\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 0.0000  Tip Angle\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa00.0000  Length\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 78.0000  Flute Lebgth\xa0 \xa0 \xa0 \xa050.0000  Flutes\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2 \n ➢點擊確定 \n 9.2.3工具路徑設置 \n 確保“工具軸”垂直於塊的頂面。 \n ➢單擊工具軸，然後選擇指定向量 \n ➢如圖所示選擇合適的軸 \n ➢在腔銑刀菜單中，單擊路徑設置選項工具可以使用不同的切割模式移動。 以下是每個說明。 \n 跟隨部分：這是最佳策略，其中根據零件的幾何形狀操縱刀具路徑。 如果有芯子和空腔部分，計算機會智能地考慮它們以最佳方式去除材料。 這是廣泛用於粗加工。 \n 跟隨外圍：這取決於路徑在外圍輪廓上。 例如，如果外部我們零件的外圍是矩形，刀具路徑將是產生，使它逐漸從從外到內的步進值。 這個選項是主要用於投影和型芯，而不是空腔。 \n 輪廓：僅沿的輪廓進行切割零件的幾何形狀。 用於半精加工或整理作業。 \n 擺線：此切刀非常大，用於去除大量材料。 大量逐漸的擺線運動去除了一部分物質。 所使用的切割深度將非常高這個策略。 \n Zig：僅在一個流動方向上採取線性路徑。 \n Zig Zag：此工具在每個深度級別均採用之字形路徑。 通過減少時間來節省時間空氣切斷時間（空轉）。 攀爬和常規切割交替進行。 \n Zig with Contour：這會將路徑沿一個方向進行攀爬或常規。 獨特的是它沿著輪廓形狀非線性地移動。 \n ➢對於此練習，請從“剪切模式”下拉菜單中選擇“跟隨零件”圖標， 因為我們在部分中既有投影又有空腔 \n 9.2.4 Step Over and Scallop Height \n Step Over 這是連續兩次銑削之間的距離。 它可以以固定值或刀具直徑的形式給出。 步進不應大於軸的有效直徑刀具，否則將在每個切割水平上留下多餘的材料， 導致銑削操作不完整。 數值或定義步進所需的值將根據選擇了“跨步”選項。這些選項包括“常量”，“扇貝”，“工具直徑等。 例如，“常數”要求您輸入下一行的距離值。 \n Scallop Height 扇貝高度根據最大高度控制平行通道之間的距離 指定在通過之間保留的材料（扇貝）。 這受刀具定義的影響和曲面的曲率。 扇貝允許系統確定跨步距離根據您輸入的扇貝高度。 \n ➢對於Stepover，選擇％Tool Flat，然後將Percent更改為70 \n 9.2.5 每次切割深度 \n 這是在級別之間給出的值，以將幾何體切成層並切割刀具路徑根據每一層的幾何形狀。 切割深度值可以針對每個級別而變化。 級別是與XY平面平行的水平面。 如果我們不給出削減水平，該軟件將不必要地嘗試計算不符合我們興趣的整個零件和機器區域的切片。 \n ➢將每次切割的通用深度值更改為0.5現在，我們將添加級別範圍。 這會將零件沿Z方向分成不同級別被加工。 \n ➢點擊削減水平 這將彈出一個“剪切級別”對話框。 你需要設置切割的水平。 您可以指向達到削減水平的對像或將其提供為範圍深度值。 我們不會磨合零件的最底面，但直到40距頂部毫米。 因此，我們必須刪除最後一個級別。 \n ➢將範圍類型更改為用戶定義 \n ➢將範圍深度更改為80 \n ➢選擇確定 \n 9.2.6切削參數 \n ➢在路徑設置菜單上，單擊切割參量 \n ➢在策略選項卡按鈕下，更改剪切 從級別優先到深度優先的順序將切割順序更改為“深度優先”可命令軟件生成刀具路徑， 這樣它將在跳到另一個島之前，將一個島完全磨到最底部。 深度優先策略減少了程序的非剪切時間，因為不必要的撤回和在每個切削深度處嚙合。 \n ➢單擊股票選項卡 \n ➢將零件側庫存的值更改為0.5此值是給每個側面的餘量部分。 如果您想給地板不同的值（或水平的水平面）取消選中旁邊的框使用“地板與側面相同”， 並輸入不同的值零件地板庫存。 \n ➢點擊確定 \n 9.2.7迴避 \n ➢單擊非切割動作 \n ➢單擊迴避標籤 該窗口由以下幾個避免點組成，我們關注以下幾點： \n From Point 這是換刀命令的關鍵點將進行。 該值通常是50或100Z = 0高度以上mm，以增強安全性自動工具更換切刀時的工作轉換器（ATC）。 \n ➢點擊起點 \n ➢在點選項字段中選擇指定 \n ➢在點對話框中，輸入坐標XC，YC和ZC為（0，0，50） \n ➢點擊確定 \n Start Point \n 這是程序開始和結束的地方。 該值也比Z = 0級別可增強安全性。 這也是機器操作員檢查高度的地方相對於作業的Z = 0級別安裝在主軸上的刀具。 此交叉檢查在機床中輸入的刀具補償。 \n ➢單擊起點 \n ➢選擇指定 \n ➢在點對話框中輸入坐標（0，0，50） \n ➢單擊確定退出點構造器 間隙平面是刀具移動到下一個區域之前將在其上縮回的平面或島嶼。 這也稱為縮回平面。 有時，清除平面可能是先前的切割平面。 但是，當工具必須從一個區域移動到另一個區域時，有必要在這樣做之前，請先移至“清除平面”。 清理平面的值應至少為在工件或固定裝置或固定在機器上的最高點上方2毫米處床。 \n ➢單擊轉移/快速選項卡 \n ➢在間隙選項中選擇平面 \n ➢從類型選項卡的下拉菜單中選擇XC-YC平面 \n ➢在偏移和參考標籤下，輸入值3作為距離 \n ➢單擊兩次“確定”返回到腔磨機參數窗口 \n 9.2.8速度和進給 \n ➢選擇進給和速度輸入進給和速度參數 \n Speed \n 速度通常指定主軸的每分鐘轉數（rpm）（主軸速度）。 然而，從技術上講，速度是指工具的切削速度（表面速度）。 是線速度刀具的刀尖的角度。 影響此線速度的相對參數為主軸和刀具直徑（有效直徑）。 \n ➢輸入主軸轉速值為4500 rpm 對於“表面速度”和“每齒進給量”， 應輸入給出的建議值由刀具製造商提供（對於本示例，請單擊主軸附近的計算器按鈕速度）。 通過輸入這些值，軟件將自動計算切削進給速度和主軸轉速。 您也可以輸入自己的進給速度和主軸速度值。 \n Feeds \n 單個程序中涉及許多feed。最重要的是切削飼料。 這是進給時，工具將與原始工件並實際上切掉材料工件。 它是相對線速度刀具相對於作業移動的位置。 其他提要是可選的。 一些機器控制系統使用其默認的回退和移動進給。 在這些情況下，即使您沒有輸入其他提要，就不會有任何問題。 一些控制系統可能會從程序。 它可能比機器的略小最大進給速度。 \n ➢輸入Cut值為1200 mmpm \n ➢點擊確定 \n 9.3 程序生成和驗證 \n 9.3.1生成程序 \n 現在我們完成了輸入所需的所有參數用於粗加工程序。 現在是時候生成程序。 \n ➢單擊工具欄底部的“生成”圖標的窗口。 您現在可以觀察對模型進行切片的軟件切入深度並在每個級別上創建刀具路徑。 您可以在模型上找到青色，藍色，紅色和黃色如圖所示。 \n 9.3.2刀具路徑顯示 每當您想查看刀具的整個刀具路徑時程序，在“操作”中右鍵單擊該程序導航器，然後單擊重播。 它將顯示為如下圖所示。 現在，您可以觀察到“操作導航器”中該程序的旁邊是黃色的驚嘆號點而不是紅色標記。 這意味著程序已成功生成，但尚未生成經過後處理。 如果模型有任何更改，程序將再次帶有紅色標記在它的旁邊。 這意味著必須再次生成程序。 但是，沒有必要更改程序中的任何參數。 \n 9.3.3刀具路徑模擬 \n 檢查您創建的程序非常重要。 這樣可以防止任何不當和在切割路徑中進行危險動作。 錯誤的參數和設置將給工件造成高昂的損壞。 為避免此類錯誤，NX 12提供工具路徑驗證和鑿檢查。 刀具路徑驗證可用於查看整個程序中的刀具運動。 您可以觀察工具的嚙合方式以及切割後的縮回方式。 它還顯示了實際材料通過圖形模擬被刪除。 您還可以通過以下方式查看特定的關注區域移動程序行。 \n ➢在“操作導航器”中右鍵單擊程序，然後選擇“工具路徑”→“驗證”或單擊工具欄中的“驗證工具路徑”按鈕 這將允許您設置用於可視化工具路徑的參數。 \n ➢在工具路徑可視化窗口中， 單擊在播放圖標上查看動作您還可以在不同模式下查看可視化通過更改旁邊的下拉菜單中的選項顯示。 \n ➢單擊同一頁面上的3D動態選項卡窗口 \n ➢單擊同一頁面上的“顯示選項”按鈕窗口 \n ➢將動作數更改為50 \n ➢將動畫精度更改為精細 \n ➢將IPW顏色更改為綠色 \n ➢點擊確定 \n ➢再次單擊播放按鈕模擬將如下圖所示正確的。 使用此選項，您將能夠查看實際的切削模擬和材料去除通過計算機圖形學。 它是3D動態的您可以在模擬時旋轉，平移和縮放模擬正在玩。 \n 9.3.4鑿檢查 \n 切屑檢查用於驗證刀具是否從工件上去除了零件幾何形狀上多餘的材料。 考慮到設計公差，任何製造過程可能通過兩種方式生產有缺陷的零件。 一種是去除多餘的材料，也稱為更少的材料條件。 另一種是留下應該清除的材料是更多的物質條件。 在大多數情況下，前者更危險，因為不可能重新設計部分。 後者更安全，因為可以通過返工去除殘留的材料那個部分。 鑿檢查選項檢查前一種情況是多餘的材料清除將被識別。 \n ➢右鍵單擊操作中的程序航海家 \n ➢選擇工具路徑→鑿檢查 \n ➢點擊確定 鑿檢查完成後，刀具路徑報告窗口將彈出。 如果有的話找到鑿子，就要糾正程序。 \n ➢單擊確定或直接關閉彈出窗口 \n 9.4操作方法 \n 9.4.1粗加工 \n 對於銑削操作，在完成作業之前，首先應進行粗銑削。 粗加工的主要目的是以更快的速度去除散裝物料，而不會影響準確性和工作完成度。 給予庫存津貼以為生產提供足夠的材料。 完成操作以獲得準確和良好的完成工作。 我們在上一部分中所做的本章正在生成粗加工程序。 現在我們必須適度消除所有不平整上一個程序剩餘的材料。 \n 9.4.2半精加工 \n 半精加工程序旨在消除由於粗加工引起的不均勻並為精加工工序保留部分庫存津貼。 一旦我們完成了第一個粗加工程序中，半精加工總是更容易執行。 現在，我們將第一個程序複製並粘貼到Operation Navigator中。 在新程序中您只需要更改一些參數和切削刀具尺寸，然後重新生成程序。 \n ➢右鍵單擊CAVITY_MILL程序操作導航器，然後單擊複製 \n ➢再次右鍵單擊CAVITY_MILL，然後選擇粘貼 \n ➢右鍵單擊第二個您剛創建的CAVITY_MILL_COPY，然後單擊重命名 \n ➢將第二個程序重命名為CAVITY_MILL_1您會看到新創建的CAVITY_MILL_1旁邊有一個紅色標記，表示該程序未生成。 現在讓我們設置第二個程序需要更改的參數。 在開始之前，我們應該分析零件的幾何形狀以找出刀具直徑的最小角半徑。 在我們的模型中為5毫米，在地板邊緣為1毫米。 因此，切刀直徑可以小於10 mm。 為了獲得最佳的輸出和剛性，我們將選擇帶有直徑10，下半徑1。 \n ➢在Operation Navigator上雙擊CAVITY_MILL_1以打開參數窗口 就像在上一個程序中一樣，我們將創建一個新刀具。 在工具標籤中，您將看到您首先選擇的刀具。 它將顯示BUEM12X1作為當前工具。 \n ➢創建一個新的工廠並命名為BUEM10X1 \n ➢直徑應小於10半徑為1，長笛長度為38 \n ➢點擊確定 \n ➢單擊每次切割的公共深度為0.25英寸路徑設置 \n ➢然後單擊切割參數按鈕 \n ➢單擊股票選項卡 \n ➢取消選中與使用地板相同旁邊的框側 \n ➢輸入0.25作為零件庫存 \n ➢輸入0.1作為零件底盤存貨 \n ➢單擊遏制選項卡按鈕 \n ➢在“在製品中”旁邊的下拉菜單中，選擇“使用3D”。 In Process Workpiece是NX中非常有用的選項。 該軟件考慮了先前的程序並生成當前程序，以使無材料區域中沒有不必要的切削運動。 這種策略大大減少了切割時間和空氣切割運動。 該算法將強制切刀僅去除之前的材料計劃並保持當前零件庫存限額。 \n ➢選擇確定以返回到參數窗口 \n ➢單擊提要和速度 \n ➢輸入主軸轉速5000 \n ➢然後點擊確定半成品程序的參數和設置完成。 \n ➢通過單擊生成圖標重新生成程序 \n ➢軟件生成完成後，單擊確定。 然後重播“工具路徑可視化”。 第二個程序中生成的整體刀具路徑如下圖所示。 您可以以類似方式重播或檢查氣刨 \n 9.4.3整理概況 \n 到目前為止，我們已經完成了零件的粗加工和半精加工程序。 有一個小工件中剩餘的材料量，可在精加工程序中去除，以獲得所需的精確零件幾何形狀。 整理程序應生成為零件的表面應正確加工。 因此，最好創建多個程序以獨特的方式加工具有相關切削參數和策略的表面集，而不是而不是為所有曲面編寫一個程序。 以下內容說明瞭如何對配置文件進行分組和曲面並創建塗飾程序 \n 9.4.3.1外部輪廓 \n 該程序旨在將外斜牆修整到地板的底部。 因為該程序不應觸摸頂部的輪廓表面，我們將進行“檢查並修剪”程序中的邊界。 \n ➢重複與之前相同的步驟，在操作上複製並粘貼CAVITY_MILL_1航海家 \n ➢重命名程序CAVITY_MILL_2 \n ➢雙擊CAVITY_MILL_2進行參數更改 \n ➢在彈出的參數窗口中，將“剪切樣式”更改為“輪廓”，然後將“步進”更改為佔40％ \n ➢單擊指定修剪邊界選項卡修剪邊界窗口將彈出。 確保在右邊執行以下步驟序列。 保持Trim Side的默認設置為內。 這告訴軟件切刀不應在邊界內的任何地方切割材料。 修剪允許您可以指定邊界，以進一步限制每個切割級別的切割區域。 \n ➢將選擇方法更改為曲線 \n ➢將平面從自動更改為指定，然後單擊平面對話框，將彈出一個新窗口。 窗口將詢問選擇飛機的模式曲線應投影。 通常應該在零件的最高點幾何。 準確地說，它應該在MCS上。 \n ➢從類型下的下拉菜單中選擇XC-YC平面 \n ➢在距離旁邊輸入3 \n ➢點擊確定 現在我們將開始從零件中選擇邊。 這些選定的邊將投影在Z =3平面作為曲線並用作邊界。 \n ➢如圖所示，沿著輪廓表面選擇牆的所有頂部外邊緣。 確保連續選擇所有8條邊線 \n ➢選擇確定 \n ➢輸入每次切割的通用深度為0.2 \n ➢點擊切割參數 \n ➢在彈出對話框中，單擊“股票”選項卡 \n ➢輸入零件側面庫存和零件底面庫存值為0.00 \n Intol允許您指定最大距離切割器可能偏離預期的路徑進入工件。 Outtol允許您指定最大距離刀具可能會偏離預期的路徑而遠離工件。 \n ➢輸入Intol和Outtol值為0.001 如圖所示 \n ➢點擊確定 \n ➢單擊生成圖標以生成主參數窗口中的程序 \n ➢當程序生成完成外部輪廓的精加工程序現已準備就緒。 您可以在重放工具時觀察切刀永遠不會越過為修剪和檢查所給定邊界的路徑。 切刀縮回Z = 3平面以進行重定位。 \n 9.4.3.2內部輪廓 \n ➢重複與之前相同的步驟，在操作上複製並粘貼CAVITY_MILL_2導航器並將其重命名為CAVITY_MILL_3 \n ➢雙擊CAVITY_MILL_3以編輯參數或右鍵單擊它並選擇Edit \n ➢選擇“指定修剪邊界”選項卡，然後在彈出窗口中選擇“修剪邊在外部”對話框這樣可以防止切刀通過邊界。 \n ➢將選擇方法更改為曲線 \n ➢手動將平面更改為XC-YC平面，並將偏移距離輸入為3 \n ➢點擊確定 \n ➢如圖所示，選擇沿輪廓表面的所有頂部內邊緣。 再次，使確保以連續順序選擇所有8條邊線（使用Shift +單擊以取消選擇曲線）。 \n ➢選擇確定返回參數窗口 \n ➢生成程序 \n ➢生成完成後，單擊確定。 內部輪廓的精加工程序現已準備就緒。 通過重播工具路徑，您可以觀察到切刀永遠不會越過修剪和檢查所給定的邊界。 \n 9.4.4修整輪廓表面 \n 現在，我們將使用其他類型的策略來完成頂部自由曲面。 \n ➢單擊工具欄中的創建操作圖標 \n ➢單擊固定輪廓圖標為如圖所示 \n ➢選擇1234作為程序 \n ➢選擇WORKPIECE_MAIN作為幾何 \n ➢保留程序的默認名稱 \n ➢點擊確定 \n ➢在參數窗口的驅動方法下，確保已選擇邊界 \n ➢單擊圖標，這將彈出“邊界驅動方法”窗口，然後單擊如圖所示，打開“邊界幾何”菜單 \n ➢將模式更改為曲線/邊線 \n ➢選擇材料面在外面 \n ➢選擇工具位置為開工具位置確定工具在接近邊界時如何定位自身會員。 可以為邊界成員分配三個工具位置之一：“打開”，“ Tanto”或“接觸”。 •在“打開”位置，工具的中心點與沿工具軸的邊界對齊或投影向量。 •在Tanto位置，工具的側面與邊界對齊。 •在“接觸”位置，工具接觸邊界。 \n ➢對於飛機，選擇“用戶定義” \n ➢再次將平面設置為XC-YC，距離為3 \n ➢點擊確定 \n ➢如圖所示，選擇頂部輪廓表面的外環。 記得選擇邊緣連續 \n ➢點擊確定我們已在循環外部修剪了幾何圖形。 現在我們必須修剪內部的幾何內部循環，這樣剩下的唯一幾何就是兩個循環之間的區域。 \n ➢選擇模式為曲線/邊線 \n ➢選擇材料面為內側，工具位置為開 \n ➢在XC-YC上選擇用戶定義的平面，距離為3 \n ➢如圖所示選擇輪廓表面的內邊緣 \n ➢單擊確定返回到邊界驅動方法窗口 \n ➢將Stepover方法更改為Scallop，輸入高度為0.001，然後單擊OK。 \n ➢點擊切割參數 \n ➢在庫存選項卡中更改容差值，以便零件總和零件總和是0.001 \n ➢單擊更多選項卡按鈕並輸入值最大步長為1.0 \n ➢點擊確定在主要參數窗口中， \n ➢創建一個新工具並將其命名為BEM10 \n ➢將直徑更改為10毫米或更小半徑為5毫米。 \n ➢點擊確定 \n ➢單擊工具欄上的Feeds and Speeds圖標。參數窗口 \n ➢輸入主軸轉速，進給速度（切削）和如圖所示計算其他對 \n ➢點擊確定 \n ➢生成程序輪廓表面現已完成，您可以查看通過刀具路徑驗證進行仿真。 \n 9.4.5地板 \n 地板是在地板上執行的整理操作零件的水平平面（地板）。 在大多數銑削過程中，地板將是最終的他們的運作。 所有的水平面完成。 這種平面操作使切刀在每張臉都單次通過。 \n ➢單擊創建操作圖標 \n ➢在頂部將類型更改為mill_planar窗戶的 \n ➢更改所有選項，如圖所示 \n ➢點擊確定 \n ➢在參數窗口中，更改剪切跟隨模式 \n ➢更改以下刀具直徑的百分比步入40在地板操作中，最好始終保持步進值小於直徑的一半刀具以在平面上獲得更大的平整度表面。 與以前的程序不同，我們必須選擇一個剪切區域。 \n ➢單擊“指定切割區域地板”，如圖所示 \n ➢選擇顯示在下圖如果您無法選擇如圖所示的表面轉到零件導航器並隱藏空白（選擇空白，您可以右鍵單擊空白，使用選擇列表...）， 選擇曲面並再次取消隱藏毛坯。 \n ➢點擊確定 \n ➢在主參數窗口中單擊切割參數 \n ➢選擇庫存選項卡按鈕並輸入Intol和Outtol值為0.001 \n ➢點擊確定 \n ➢點擊進給和速度 \n 在“參數”主窗口中， \n ➢創建一個新工具並將其命名為BEF105 \n ➢將直徑更改為10毫米或更小半徑為5毫米 \n ➢點擊確定因為這是地板操作，所以最好將主軸轉速高，進給速度低到以前的操作。 \n ➢輸入主軸速度，進給速度的值（剪切）併計算其他值，如數字 \n ➢選擇確定 \n ➢生成程序。 然後重播並驗證切刀路徑下圖顯示了地板的“刀具路徑”顯示。 \n 9.5後期處理 \n 製造應用程序的主要用途是生成製造的工具路徑部分。 通常，我們不能僅將未修改的刀具路徑文件發送到機器並開始切割因為有許多不同類型的機器。 每種機器都有獨特的硬件功能，要求和控制系統。 例如，機器可能具有垂直或垂直臥式主軸它可以在同時移動多個軸的同時進行切割等。 控制器接受工具路徑文件，並指示工具運動和其他機器活動（例如轉動冷卻液或空氣）。 自然，每種類型的機器都有獨特的硬件特性；控制器在以下方面也有所不同軟件特性。 例如，大多數控制器都要求將冷卻液在特定代碼中給出。 一些控制器還限制了M代碼的數量，在一行輸出中被允許。 此類信息不在最初的NX工具路徑中。 因此，必須修改刀具路徑以適合每種不同的獨特參數。 機器/控制器組合。 修改過程稱為後處理。 結果是後處理的刀具路徑。 生成最終的後加工刀具路徑涉及兩個步驟。 1.創建刀具路徑數據文件，或稱為CLSF（刀具位置源文件）。 2.將CLSF後處理為機器CNC代碼（後處理文件）。 該程序讀取工具路徑數據並將其重新格式化以用於特定機器及其隨附工具控制器。 \n 9.5.1創建CLSF \n 生成並保存操作後，將生成的刀具路徑存儲為操作的一部分在零件文件中。  CLSF（刀具位置源文件）提供了複製這些內部文件的方法從零件文件中的操作到CLSF中的工具路徑（即文本文件）的路徑。 GOTO值是當前刀具路徑的“快照”。 導出的值引用自操作中存儲的MCS。  CLS文件是某些後續程序的必需輸入，例如後處理器。 \n ➢單擊以下程序之一您想在操作導航器 \n ➢點擊輸出CLSF 操作工具欄將會彈出一個窗口以選擇CLSF格式。 \n ➢選擇CLSF_STANDARD並 輸入文件的位置 \n ➢選擇確定 將創建CLSF文件。 會類似於圖下面。 文件內容包含刀具的基本代碼運動，沒有任何有關機器代碼和控制的信息系統。 該文件可用於任何機器的後處理控制。 文件的擴展名是.cls。 已輸出到CLSF或後處理的任何程序的下一個綠色複選標記在“操作導航器”中對其進行操作。 \n 9.5.2後處理 \n ➢在操作導航器中單擊要發布的程序 \n ➢單擊菜單→工具→操作導航器→輸出→後處理或從主頁選項卡，如圖所示 \n ➢選擇MILL_3_AXIS機器並輸入文件的位置 \n ➢選擇確定 這將為目標計算機創建後處理文件。 您可以找到塊號帶有與機器控制器類型有關的G和M代碼。 文件的擴展名是.ptp。 \n 最終輸出（filename.ptp）文件可以傳輸到用於進行實際銑削的機器操作。 從模型轉移到製造開始的整個過程模塊將文件傳輸到機器，並將原始零件加工成最終零件被稱為計算機輔助製造。 \n Week13 \n 用 Webots 進行 Webots Tutorial-1 的練習 \n Week14 \n 用 Webots 進行 Webots Tutorial-2 的練習 \n', 'tags': '', 'url': 'Weeks 10~14.html'}, {'title': 'Weeks 15~18', 'text': "Week15 \n \n Week17 \n Building the joints 建立關節 \n Now we will take care of the joints/motors.  Most of the time, we know the exact position and orientation of each of the joints.  In that case, we simply add the joints with [Menu bar --> Add --> Joints --> ...],  then we can change their position and orientation with the position dialog and orientation dialog.  In other situations, we only have the Denavit-Hartenberg (i.e. D-H) parameters.  In that case, we can build our joints via the tool model located in Models/tools/Denavit-Hartenberg joint creator.ttm,  in the model browser. Othertimes, we have no information about the joint locations and orientations.  Then, we need to extract them from the imported mesh. Let's suppose this is our case.  Instead of working on the modified, more approximate mesh, we open a new scene, and import the original CAD data again. Most of the time, we can extract meshes or primitive shapes from the original mesh.  The first step is to subdivide the original mesh. If that does not work, we do it via the triangle edit mode.  Let's suppose that we could divide the original mesh. We now have smaller objects that we can inspect.  We are looking for revolute shapes, that could be used as reference to create joints at their locations, with the same orientation.  First, remove all objects that are not needed. It is sometimes also useful to work across several opened scenes, for easier visualization/manipulation.  In our case, we focus first on the base of the robot: it contains a cylinder that has the correct position for the first joint.  In the triangle edit mode, we have: \n 現在，我們注意關節/馬達。 大多數時候，我們知道每個關節的確切位置和方向。 在這種情況，我們需使用[菜單欄->添加->關節-> ...]添加關節，然後可以用位置對話框和方向對話框更改它們的位置和方向。 在其他情況，我們只有Denavit-Hartenberg（即D-H）參數。 在這種情況，我們可以通過模型瀏覽器中位於Models / tools / Denavit-Hartenberg聯合creator.ttm中的工具模型來構建關節。 有時，我們沒有關於關節位置和方向的信息。然後，我們需要從導入的網格中提取它們。 讓我們假設這是我們的情況。無需處理修改過的，更近似的網格，而是打開一個新場景，然後再導入原始CAD數據。 大多數時候，我們可以從原始網格中提取網格或基本形狀。第一步是細分原始網格。 如果沒有用，我們通過三角形編輯模式進行操作。假設我們可劃分原始網格。 現在，我們可以檢查較小的對象。我們在尋找旋轉形狀，可以用作在其位置以相同方向創建關節的參考。 首先，刪除所有不需要的對象。 有時在多個打開的場景中工作也很有用，以便於可視化/操作。 在我們的案例中，我們首先關注機器人的基座：它包含一個圓柱體，該圓柱體的第一個關節的位置正確。 在三角形編輯模式下，我們有： \n [Robot base: normal and triangle edit mode visualization] [機器人基礎：法線和三角形編輯模式可視化] \n We change the camera view via the page selector toolbar button, in order to look at the object from the side.  The fit-to-view toolbar button can come in handy to correctly frame the object in edition.  Then we switch to the vertex edit mode and select all vertices that belong to the upper disc.  Remember that by switching some layers on/off, we can hide other objects in the scene.  Then we switch back to the triangle edit mode: \n 我們通過頁面選擇器工具欄按鈕更改相機視圖，以便從側面查看對象。  適合查看的工具欄按鈕可以派上用場，以正確構圖版本中的對象。  然後，我們切換到頂點編輯模式，並選擇屬於上光盤的所有頂點。  記得，通過打開/關閉某些層，我們可以隱藏場景中的其他對象。  然後我們切換回三角形編輯模式： \n [Selected upper disc, vertex edit mode (1 & 2), triangle edit mode (3)] [選擇的上光盤，頂點編輯模式（1和2），三角形編輯模式（3）] \n Now we click Extract cylinder (Extract shape would also work in that case),  this just created a cylinder shape in the scene, based on the selected triangles.  We leave the edit mode and discard the changes.  Now we add a revolute joint with [Menu bar --> Add --> Joint --> Revolute], keep it selected, then control-select the extracted cylinder shape.  In the position dialog, on the position tab, we click Apply to selection: this basically copies the x/y/z position of the cylinder to the joint.  Both positions are now identical.  In the orientation dialog, on the orientation tab, we also click Apply to selection: the orientation of our selected objects is now also the same.  Sometimes, we will need to additionally rotate the joint about 90/180 degrees around its own reference frame in order to obtain the correct orientation or rotation direction. We could do that on the rotation tab of that dialog if needed (in that case, do not forget to click the Own frame button). In a similar way we could also shift the joint along its axis, or even do more complex operations.  This is what we have: \n 現在，我們點選 Extract cylinder (在這種情況下 Extract shape 也將起作用)。 這只是根據選定的三角形在場景中創建了圓柱體形狀。 我們離開編輯模式並放棄更改。 現在，通過[ Menu bar --> Add --> Joint --> Revolute ]添加旋轉關節，使其保持選中狀態，然後控制選擇提取的圓柱形狀。 然後控制選擇提取的圓柱形狀。 在位置對話框的 position 選項卡上，點選 Apply to selection ：這基本上將圓柱體的x / y / z位置複製到關節。 現在兩個位置都相同。 在方向對話框中的方向選項卡上，我們還點選 Apply to selection ：所選對象的方向現在也相同。 有時，我們將需要圍繞其自身的參考框架額外旋轉關節90/180度，以獲得正確的方向或旋轉方向。 如果需要，我們可以在該對話框的 rotation 選項卡上執行此操作（在這種情況下，請不要忘記點選 Own frame 按鈕）。 同樣，我們也可以沿關節的軸移動關節，甚至進行更複雜的操作。 這就是我們所擁有的。 \n \n [Joint in correct location, with the correct orientation] [在正確的位置，以正確的方向接合] \n Now we copy the joint back into our original scene, and save it (do not forget to save your work on a regular basis! The undo/redo function is useful, but doesn't protect you against other mishaps).  We repeat above procedure for all the joints in our robot, then rename them.  We also make all joints a little bit longer in the joint properties, in order to see them all.  By defaut, joints will be assigned to visibility layer 2, but can be changed in the object common properties.  We assign now all joints to visibility layer 10, then temporarily enable visibility layer 10 for the scene to also visualize those joints (by default, only visibility layers 1-8 are activated for the scene).  This is what we have (the model ResizableFloor_5_25 was temporarily made invisible in the model properties dialog): \n 現在，我們將關節複製回到原始場景中，並保存它（不要忘記定期保存您的工作！ undo/redo 功能很有用，但不能保護您免受其他不幸的影響）。 我們對機器人中的所有關節重複上述過程，然後重命名它們。 我們還將使所有關節的關節屬性稍長一些，以便查看所有關節。 通過默認，關節將分配給可見性層2，但可以在對象公共屬性中對其進行更改。 現在，我們將所有關節分配給可見性層10，然後為場景臨時啟用可見性層10，以使這些關節也可視化（默認情況下，僅激活場景的可見性層1-8）。 這就是我們所擁有的（模型 ResizableFloor_5_25 模型在模型屬性對話框中暫時不可見）: \n \n [Joints in correct configuration] [接頭配置正確] \n At this point, we could start to build the model hierarchy and finish the model definition. But if we want opur robot to be dynamically enabled, then there is an additional intermediate step: \n 至此，我們可以開始構建模型層次結構並完成模型定義。 但是，如果我們希望動態啟用 opur 機器人，則還有一個額外的中間步驟。 \n Week18 \n 錄製期末影片 \n \n", 'tags': '', 'url': 'Weeks 15~18.html'}, {'title': 'Note', 'text': 'Solvespace 快捷鍵 \n \n \n \n \n D \n 長度設定 \n \n N \n 角度設定 \n \n \n \n H \n 水平限制 (左右疊合) \n \n V \n 垂直限制 (上下疊合) \n \n \n \n L \n 平行限制 (無交角) \n \n [ \n 垂直限制 (90°) \n \n \n \n O \n 重疊 (點在線上) \n \n Y \n 對稱中心點 \n \n \n \n Q \n 等長限制 \n \n X \n 物件平行 \n \n \n \n U \n \n 其他輔助角 \n \n \n E \n 切換參考尺寸 \n \n \n \n week18 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules\xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};