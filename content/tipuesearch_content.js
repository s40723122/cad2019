var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace-1', 'text': 'git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n', 'tags': '', 'url': 'Solvespace-1.html'}, {'title': 'Solvespace-2', 'text': '\n \n', 'tags': '', 'url': 'Solvespace-2.html'}, {'title': 'week15', 'text': '\n', 'tags': '', 'url': 'week15.html'}, {'title': 'week16', 'text': '\n \n', 'tags': '', 'url': 'week16.html'}, {'title': 'week17', 'text': "building the joints \n Now we will take care of the joints/motors. Most of the time, we know the exact position and orientation of each of the joints. In that case, we simply add the joints with [Menu bar --> Add --> Joints --> ...], then we can change their position and orientation with the\xa0 position dialog \xa0and\xa0 orientation dialog . In other situations, we only have the Denavit-Hartenberg (i.e. D-H) parameters. In that case, we can build our joints via the tool model located in\xa0 Models/tools/Denavit-Hartenberg joint creator.ttm , in the model browser. Othertimes, we have no information about the joint locations and orientations. Then, we need to extract them from the imported mesh. Let's suppose this is our case. Instead of working on the modified, more approximate mesh, we open a new scene, and import the original CAD data again. Most of the time, we can extract meshes or primitive shapes from the original mesh. The first step is to subdivide the original mesh. If that does not work, we do it via the\xa0 triangle edit mode . Let's suppose that we could divide the original mesh. We now have smaller objects that we can inspect. We are looking for revolute shapes, that could be used as reference to create joints at their locations, with the same orientation. First, remove all objects that are not needed. It is sometimes also useful to work across several opened scenes, for easier visualization/manipulation. In our case, we focus first on the base of the robot: it contains a cylinder that has the correct position for the first joint. In the triangle edit mode, we have: \n 建立關節 \n 現在我們要來關注關節以及發動機，大多時候，我們知道各個關節間準確的位置和方向。因此，我們簡單的用 [Menu bar --> Add --> Joints --> ...] 加入關節，然後我們可以利用 position dialog 和 \xa0 orientation dialog . 改變他們的位置和方向。在其他情況下，我們只有 Denavit-Hartenberg 參數。在這種情況下，在模型瀏覽器中，我們可以建立關節通過位於 Models/tools/Denavit-Hartenberg joint creator.ttm 中的工具模型。有時我們沒有關於關節方向和位置的資訊。因此，我們需要從導入的 mesh 中叫出他們。假設這是我們的情形，不用在更改和更多近似的 mesh 上做改變，我們打開一個新介面，然後再次導入原始的 CAD 數據。大多時候，我們可以從原始 mesh 中提取 mesh 或原始形狀。第一步是細分原始 mesh ，如果沒有用，我們將用 triangle edit 模式進行。假設我們可以劃分原始 mesh ，現在，我們現在可以檢查更小的物件。我們正在尋找可以用來建立關節在哪個位置的參考，有著一樣取向的旋轉形狀。首先，刪除所有不需要的物件。有時，在好幾個不同的介面中工作也很有用，可以更簡單的視覺化。在我們的案例中，我們首先關注機器人的基底，包含了一個給第一個關節正確位置的圓柱體。在 triangle edit 模式中，我們有 : \n We change the camera view via the\xa0 page selector \xa0 toolbar button , in order to look at the object from the side. The\xa0 fit-to-view toolbar button \xa0can come in handy to correctly frame the object in edition. Then we switch to the\xa0 vertex edit mode \xa0and select all vertices that belong to the upper disc. Remember that by switching some\xa0 layers \xa0on/off, we can hide other objects in the scene. Then we switch back to the triangle edit mode: \n 我們利用頁面中的選擇工具按鈕改變相機的視角，以便從側邊看物件。適合查看的工具欄按鈕可以派上用場，以可以建構在版本中的物件。然後，我們切換到 vertex edit 模式，選擇所有在上碟裡的所有端點。記住，打開或關閉圖層時，我們會隱藏到圖層中的物件。 \n 然後，我們切換回 triangle edit 模式 : \n Now we click\xa0 Extract cylinder \xa0( Extract shape \xa0would also work in that case), this just created a cylinder shape in the scene, based on the selected triangles. We leave the edit mode and discard the changes. Now we add a revolute joint with [Menu bar --> Add --> Joint --> Revolute], keep it selected, then control-select the extracted cylinder shape. In the\xa0 position dialog , on the\xa0 position \xa0tab, we click\xa0 Apply to selection : this basically copies the x/y/z position of the cylinder to the joint. Both positions are now identical. In the\xa0 orientation dialog , on the\xa0 orientation \xa0tab, we also click\xa0 Apply to selection : the orientation of our selected objects is now also the same. Sometimes, we will need to additionally rotate the joint about 90/180 degrees around its own reference frame in order to obtain the correct orientation or rotation direction. We could do that on the\xa0 rotation \xa0tab of that dialog if needed (in that case, do not forget to click the\xa0 Own frame \xa0button). In a similar way we could also shift the joint along its axis, or even do more complex operations. This is what we have: \n 現在，我們點擊提取圓柱體 ( 提取形狀也會開始運作 ) ，這只是根據選取的三角形，在介面中創造一個圓柱體。離開編輯模式並放棄更改。現在我們利用 [Menu bar --> Add --> Joint --> Revolute] 新增一個旋轉關節，讓他保持選定，然後選取提取的圓柱體。在 ” 位置 ” 選項中，點擊 ” 應用到選擇 ”: 這基本上會將圓柱體上的 x/y/z 位置複製到關節上。兩個位置現在都相同了。在方向介面中，我們也點擊 ” 運用到選擇 ”: 我們選擇的物件的方向現在也相同了。有時，我們需要選轉關節 90/180 度，以獲得正確的方向或旋轉方向。如果需要的話，我們也可以在旋轉鍵上執行此操作 ( 這種情況下，別忘記點擊 own frame 鍵 ) 。同樣，我們也可以沿著關節的軸移動關節，甚至進行更複雜的操作，這是我們有的 : \n Now we copy the joint back into our original scene, and save it (do not forget to save your work on a regular basis! The undo/redo function is useful, but doesn't protect you against other mishaps). We repeat above procedure for all the joints in our robot, then rename them. We also make all joints a little bit longer in the\xa0 joint properties , in order to see them all. By defaut, joints will be assigned to visibility layer 2, but can be changed in the\xa0 object common properties . We assign now all joints to visibility layer 10, then temporarily\xa0 enable visibility layer 10 for the scene \xa0to also visualize those joints (by default, only visibility layers 1-8 are activated for the scene). This is what we have (the model\xa0 ResizableFloor_5_25 \xa0was temporarily made invisible in the\xa0 model properties dialog ):  \n 現在，我們將關節複製回我們原始的介面中，並儲存 ( 不要忘記定期保存你的工作進度 ! 返回功能很有用，但不能保護你免於其他事故的影響 ) 。對機器人中所有關節重複以上的動作，然後重新命名他們。我們也將所有關節的關節屬性變長一點，以便查看所有的關節，默認中，關節將會被分配在可見圖層 2 ，但是可以在公共屬性中進行更改。現在，我們將所有關節改道圖層 10 ，然後只將圖層 10 可見性打開 ( 默認情況下，只會看見圖層 1-8) 。這就是我們所擁有的， ( 模型 ResizableFloor_5_25 \xa0 在模型屬性中暫時不可見 ): \n At this point, we could start to build the model hierarchy and finish the model definition. But if we want opur robot to be\xa0 dynamically enabled , then there is an additional intermediate step: \n 至此，我們可以開始建立模型層次並完成模型定義。但是，如果我們希望啟用 opur 機器人，則還有另一個中間步驟 :", 'tags': '', 'url': 'week17.html'}]};