// Language System for Multi-language Support
const LANGUAGE_DATA = {
    th: {
        title: "เครื่องคำนวณมอร์ต้าร์",
        mortarType: "🎯 ประเภทมอร์ต้าร์",
        originalGame: "เกมต้นฉบับ",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] ปืนใหญ่ M777 155mm",
        shellType: "💥 ประเภทกระสุน",
        heShell: "กระสุนระเบิด",
        smokeShell: "กระสุนควัน",
        illuminationShell: "กระสุนส่องสว่าง",
        "0832AyShell": "กระสุนระเบิด 0-832Ay",
        "A832AYShell": "กระสุนควัน A-832AY",
        "C832CShell": "กระสุนส่องสว่าง C-832C",
        weaponPosition: "📍 ตำแหน่งอาวุธ",
        weapon: "อาวุธ",
        targetPosition: "🎯 ตำแหน่งเป้าหมาย",
        target: "เป้าหมาย",
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Grid Reference:",
        gridWarning: "รูปแบบ Grid Reference ต้องเท่ากับในแผนเกม",
        altitude: "ระดับความสูง (m):",
        calculate: "🧮 คำนวณ",
        firingSolution: "📊 ผลการคำนวณการยิง",
        distance: "ระยะทาง:",
        azimuth: "มุมแอซิมุท ⭤ :",
        elevation: "มุมยกปืน ⭥ :",
        charge: "ประจุ:",
        timeOfFlight: "เวลาบิน:",
        heightDifference: "ความต่างความสูง:",
        accuracyWarning: "⚠️ คำเตือนความแม่นยำ",
        accuracyWarningText: "หากระยะชดเชยความสูงมากกว่า 100 เมตร จะมีความคลาดเคลื่อนของระยะกระสุนตก 50-200 เมตร",
        ballisticData: "📋 ข้อมูลลิสติก",
        windTitle: "🌬️ ลม (Wind)",
        windDirection: "ทิศลม — พัดมาจาก (°)",
        windSpeedLabel: "ความเร็วลม (m/s)",
        windHint: "ตั้งค่าตามเข็มวัดลมบนศูนย์เล็งในเกม (ทิศที่ลมพัดมาจาก + ความเร็วลม) — ตั้งความเร็ว 0 เพื่อปิดการชดเชยลม",
        advancedTitle: "🧪 คำนวณขั้นสูง (จำลองวิถีกระสุน)",
        advancedToggle: "เปิดใช้งาน",
        advancedIntro: "จำลองวิถีกระสุนด้วยสมการและค่าคงที่จากไฟล์เกมโดยตรง (แรงต้านอากาศจริงต่อกระสุนแต่ละชนิด) แก้ความสูงและลมแบบเต็มรูปแบบ ไม่ใช้ค่าประมาณเชิงเส้น — ผลลัพธ์แสดงในส่วน FIRING SOLUTION",
        range: "ระยะ (m)",
        elevationMil: "มุมยกปืน (mil)",
        timeSec: "เวลา (วิ)",
        dispersion: "การกระจาย",
        footer: "เครื่องคำนวณมอร์ต้าร์ ARMA REFORGER v2.0 | อิงจากข้อมูลลิสติกในเกม",
        createdBy: "สร้างโดย:",
        targetPresets: "🎯 เป้าหมายที่บันทึกไว้",
        presetInstructions: "PC: คลิกซ้าย(โหลด) • คลิกขวา(บันทึก) | มือถือ: แตะ(โหลด) • แตะค้าง(บันทึก) | ✗: เคลีย",
        presetSaved: "บันทึกเป้าหมาย",
        presetLoaded: "โหลดเป้าหมาย",
        presetEmpty: "ว่าง",
        presetSavedMessage: "บันทึกเป้าหมาย {0} เรียบร้อยแล้ว",
        presetLoadedMessage: "โหลดเป้าหมาย {0} เรียบร้อยแล้ว",
        clearTarget: "เคลียทั้งหมด",
        clearTargetMessage: "เคลียข้อมูลเป้าหมายและเป้าหมายที่บันทึกไว้ทั้งหมดเรียบร้อยแล้ว",
        videoTutorial: "📺 วิดีโอสอนการใช้งาน",
        ringCalculation: "🎯 RING",
        ringTitle: "Ring ที่สามารถยิงได้",
        calculateRings: "คำนวณ RING",
        availableRings: "Ring ที่ใช้ได้:",
        outOfRange: "เกินระยะ",
        noRingsAvailable: "ไม่มี Ring ที่ใช้ได้สำหรับระยะนี้",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "กดเลข 1-9 เพื่อปรับพิกัดตามตำแหน่ง Numpad (ต้องมีเลขในพิกัด 3 ตัวขึ้นไป)",
        coordinateErrorMessage: "⚠️ กรุณากรอกพิกัด Grid X และ Grid Y ให้ครบ 5 หลัก (เช่น 10000-99999)",
        coordinateGuide: "📍 วิธีหาพิกัดเบื้องต้น (click)",
        guideScale: "🔍 <strong>มาตราส่วน: 1mm = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>แจ้งปัญหา</span>",
        guideStep1: "1. เปิดแผนที่ในเกม (M)",
        guideStep2: "2. ใช้ไม้บรรทัดวัดจากขีดสเกลด้านล่าง",
        guideStep3: "3. ดูพิกัด X (เขียว) และ Y (แดง) ที่มุมล่างขวา",
        guideStep4: "4. ในรูปตัวอย่าง: X04730, Y06970",
        guideStep5: "5. กรอกพิกัดลงในช่อง Grid X และ Grid Y",
        visitorStats: "📊 สถิติผู้เข้าชม",
        totalVisits: "เข้าชมทั้งหมด:",
        todayVisits: "วันนี้:",
        onlineNow: "ออนไลน์:",
        elevationOffset: "⚙️ ชดเชยมุมยกปืน",
        offsetInstructions: "ปรับมุมยกปืนเมื่อกระสุนไปไม่ถึงเป้าหมาย (-) หรือไกลเกินเป้าหมาย (+)",
        clearOffset: "ล้าง",
        currentOffset: "ค่าออฟเซ็ต:",
        offsetApplied: "ปรับค่าออฟเซ็ตเรียบร้อยแล้ว:",
        offsetCleared: "ล้างค่าออฟเซ็ตเรียบร้อยแล้ว",
        presetWithOffset: "บันทึกพร้อมค่าออฟเซ็ต:",
        presetLoadedWithOffset: "โหลดพร้อมค่าออฟเซ็ต:",
        offsetLabel: "ชดเชย",
        usageTerms: "ไม่อนุญาตให้นำไปใช้เพื่อแสวงหาผลกำไรใดๆทั้งสิ้น",
        creditRequest: "หากนำไปใช้งานในส่วนอื่น ใส่เครดิต <strong>Youtube : Sitt Chanel</strong> ให้ด้วย"
    },
    en: {
        title: "Mortar Calculator",
        mortarType: "🎯 Mortar Type",
        originalGame: "Original Game",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] M777 Howitzer 155mm",
        shellType: "💥 Shell Type",
        heShell: "HE shell",
        smokeShell: "Smoke shell",
        illuminationShell: "Illumination shell",
        "0832AyShell": "0-832Ay HE shell",
        "A832AYShell": "A-832AY Smoke shell",
        "C832CShell": "C-832C Illumination shell",
        weaponPosition: "📍 Weapon Position",
        weapon: "WEAPON",
        targetPosition: "🎯 Target Position",
        target: "TARGET",
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Grid Reference:",
        gridWarning: "Grid Reference format matches in-game Map display",
        altitude: "Altitude (m):",
        calculate: "🧮 CALCULATE",
        firingSolution: "📊 FIRING SOLUTION",
        distance: "Distance:",
        azimuth: "Azimuth ⭤ :",
        elevation: "Elevation ⭥ :",
        charge: "Charge:",
        timeOfFlight: "Time of Flight:",
        heightDifference: "Height Difference:",
        accuracyWarning: "⚠️ Accuracy Warning",
        accuracyWarningText: "If height compensation distance is greater than 100 meters, there will be impact deviation of 50-200 meters",
        ballisticData: "📋 Ballistic Data",
        windTitle: "🌬️ Wind",
        windDirection: "Wind FROM (°)",
        windSpeedLabel: "Wind Speed (m/s)",
        windHint: "Match the in-game wind gauge on the mortar sight (direction the wind blows FROM + speed) — set speed to 0 to disable wind correction",
        advancedTitle: "🧪 Advanced (Trajectory Simulation)",
        advancedToggle: "Enabled",
        advancedIntro: "Simulates the projectile using the equation and constants taken straight from the game files (real per-shell air drag), solving height and wind exactly instead of with a linear approximation — results appear in the FIRING SOLUTION panel.",
        range: "Range (m)",
        elevationMil: "Elevation (mil)",
        timeSec: "Time (sec)",
        dispersion: "Dispersion",
        footer: "ARMA REFORGER Mortar Calculator v2.0 | Based on in-game ballistic data",
        createdBy: "Created by:",
        targetPresets: "🎯 Target Presets",
        presetInstructions: "PC: Left-click(Load) • Right-click(Save) | Mobile: Tap(Load) • Long-press(Save) | ✗: Clear All",
        presetSaved: "Saved",
        presetLoaded: "Loaded",
        presetEmpty: "Empty",
        presetSavedMessage: "Target {0} saved successfully",
        presetLoadedMessage: "Target {0} loaded successfully",
        clearTarget: "Clear All",
        clearTargetMessage: "All target data and saved presets cleared successfully",
        videoTutorial: "📺 Video Tutorial",
        ringCalculation: "🎯 RING",
        ringTitle: "Available Rings",
        calculateRings: "Calculate RING",
        availableRings: "Available Rings:",
        outOfRange: "Out of Range",
        noRingsAvailable: "No rings available for this range",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "Press 1-9 to adjust coordinates according to Numpad position (requires at least 3 digits in coordinates)",
        coordinateErrorMessage: "⚠️ Please enter Grid X and Grid Y coordinates with 5 digits (e.g., 10000-99999)",
        coordinateGuide: "📍 Basic Coordinate Finding Guide (click)",
        guideScale: "🔍 <strong>Scale: 1mm = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>Report</span>",
        guideStep1: "1. Open the map in-game (M)",
        guideStep2: "2. Use a ruler to measure from the scale at the bottom",
        guideStep3: "3. Check X (green) and Y (red) coordinates at bottom right",
        guideStep4: "4. In the example: X04730, Y06970",
        guideStep5: "5. Enter coordinates into Grid X and Grid Y fields",
        visitorStats: "📊 Visitor Statistics",
        totalVisits: "Total Visits:",
        todayVisits: "Today:",
        onlineNow: "Online Now:",
        elevationOffset: "⚙️ Elevation Offset",
        offsetInstructions: "Adjust elevation when shells fall short (-) or overshoot (+) the target",
        clearOffset: "Clear",
        currentOffset: "Current Offset:",
        offsetApplied: "Offset applied successfully:",
        offsetCleared: "Offset cleared successfully",
        presetWithOffset: "Saved with offset:",
        presetLoadedWithOffset: "Loaded with offset:",
        offsetLabel: "Offset",
        usageTerms: "Not allowed to be used for any commercial purposes.",
        creditRequest: "If used in other projects, please credit <strong>Youtube : Sitt Chanel</strong>"
    },
    ja: {
        title: "迫撃砲計算機",
        mortarType: "🎯 迫撃砲タイプ",
        originalGame: "オリジナルゲーム",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] M777 155mm 榴弾砲",
        shellType: "💥 砲弾タイプ",
        heShell: "榴弾",
        smokeShell: "煙幕弾",
        illuminationShell: "照明弾",
        "0832AyShell": "0-832Ay 榴弾",
        "A832AYShell": "A-832AY 煙幕弾",
        "C832CShell": "C-832C 照明弾",
        weaponPosition: "📍 武器位置",
        weapon: "武器",
        targetPosition: "🎯 目標位置",
        target: "目標",
        gridX: "グリッド X (0-99999):",
        gridY: "グリッド Y (0-99999):",
        gridReference: "グリッド参照:",
        gridWarning: "グリッド参照形式はゲーム内表示と一致します",
        altitude: "高度 (m):",
        calculate: "🧮 計算",
        firingSolution: "📊 射撃解決",
        distance: "距離:",
        azimuth: "方位角 ⭤ :",
        elevation: "仰角 ⭥ :",
        charge: "装薬:",
        timeOfFlight: "飛行時間:",
        heightDifference: "高度差:",
        accuracyWarning: "⚠️ 精度警告",
        accuracyWarningText: "高度補正距離が100メートルを超える場合、50-200メートルの着弾偏差が発生します",
        ballisticData: "📋 弾道データ",
        windTitle: "🌬️ 風 (Wind)",
        windDirection: "風向 — 風上 (°)",
        windSpeedLabel: "風速 (m/s)",
        windHint: "ゲーム内照準器の風向計に合わせて設定（風が吹いてくる方向 + 風速）— 風速0で風補正オフ",
        advancedTitle: "🧪 高度計算（弾道シミュレーション）",
        advancedToggle: "有効",
        advancedIntro: "ゲームファイルから直接取得した式と定数（弾種ごとの実際の空気抵抗）で弾道をシミュレートし、高低差と風を線形近似せず厳密に解きます — 結果は FIRING SOLUTION に表示されます。",
        range: "射程 (m)",
        elevationMil: "仰角 (mil)",
        timeSec: "時間 (秒)",
        dispersion: "散布",
        footer: "ARMA REFORGER 迫撃砲計算機 v2.0 | ゲーム内弾道データに基づく",
        createdBy: "作成者:",
        targetPresets: "🎯 目標プリセット",
        presetInstructions: "PC: 左クリック（読込）• 右クリック（保存）| モバイル: タップ（読込）• 長押し（保存）| ✗: 全削除",
        presetSaved: "保存済み",
        presetLoaded: "読込済み",
        presetEmpty: "空",
        presetSavedMessage: "目標 {0} が正常に保存されました",
        presetLoadedMessage: "目標 {0} が正常に読み込まれました",
        clearTarget: "全削除",
        clearTargetMessage: "すべての目標データと保存されたプリセットが正常に削除されました",
        videoTutorial: "📺 ビデオチュートリアル",
        ringCalculation: "🎯 リング",
        ringTitle: "利用可能なリング",
        calculateRings: "リング計算",
        availableRings: "利用可能なリング:",
        outOfRange: "射程外",
        noRingsAvailable: "この射程では利用可能なリングがありません",
        numpadReference: "🎯 テンキー参照",
        numpadInstructions: "1-9を押してテンキー位置に従って座標を調整します（座標に3桁以上の数字が必要）",
        coordinateErrorMessage: "⚠️ グリッドXとグリッドYを5桁で入力してください（例：10000-99999）",
        coordinateGuide: "📍 基本的な座標の見つけ方 (click)",
        guideScale: "🔍 <strong>スケール: 1mm = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>報告</span>",
        guideStep1: "1. ゲーム内でマップを開く (M)",
        guideStep2: "2. 定規を使って下部のスケールから測定",
        guideStep3: "3. 右下のX（緑）とY（赤）座標を確認",
        guideStep4: "4. 例では: X04730, Y06970",
        guideStep5: "5. Grid XとGrid Yフィールドに座標を入力",
        visitorStats: "📊 訪問者統計",
        totalVisits: "総訪問数:",
        todayVisits: "今日:",
        onlineNow: "現在オンライン:",
        elevationOffset: "⚙️ 仰角オフセット",
        offsetInstructions: "砲弾が目標に届かない(-)または超過する(+)場合に仰角を調整",
        clearOffset: "クリア",
        currentOffset: "現在のオフセット:",
        offsetApplied: "オフセットが正常に適用されました:",
        offsetCleared: "オフセットが正常にクリアされました",
        presetWithOffset: "オフセット付きで保存:",
        presetLoadedWithOffset: "オフセット付きで読込:",
        offsetLabel: "補正",
        usageTerms: "いかなる営利目的での使用も禁止されています。",
        creditRequest: "他のプロジェクトで使用する場合は、<strong>YouTube：Sitt Chanel</strong> をクレジットしてください。"
    },
    zh: {
        title: "迫击炮计算器",
        mortarType: "🎯 迫击炮类型",
        originalGame: "原版游戏",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] M777 155mm 榴弹炮",
        shellType: "💥 炮弹类型",
        heShell: "高爆弹",
        smokeShell: "烟幕弹",
        illuminationShell: "照明弹",
        "0832AyShell": "0-832Ay 高爆弹",
        "A832AYShell": "A-832AY 烟幕弹",
        "C832CShell": "C-832C 照明弹",
        weaponPosition: "📍 武器位置",
        weapon: "武器",
        targetPosition: "🎯 目标位置",
        target: "目标",
        gridX: "网格 X (0-99999):",
        gridY: "网格 Y (0-99999):",
        gridReference: "网格坐标:",
        gridWarning: "网格坐标格式与游戏内显示一致",
        altitude: "海拔 (m):",
        calculate: "🧮 计算",
        firingSolution: "📊 射击方案",
        distance: "距离:",
        azimuth: "方位角 ⭤ :",
        elevation: "仰角 ⭥ :",
        charge: "装药:",
        timeOfFlight: "飞行时间:",
        heightDifference: "高度差:",
        accuracyWarning: "⚠️ 精度警告",
        accuracyWarningText: "如果高度补偿距离超过100米，将会产生50-200米的着弹偏差",
        ballisticData: "📋 弹道数据",
        windTitle: "🌬️ 风 (Wind)",
        windDirection: "风向 — 来自 (°)",
        windSpeedLabel: "风速 (m/s)",
        windHint: "按照游戏内瞄具上的风向仪设置（风的来向 + 风速）— 风速设为0关闭风力修正",
        advancedTitle: "🧪 高级计算（弹道模拟）",
        advancedToggle: "启用",
        advancedIntro: "使用直接从游戏文件提取的方程和常数（每种炮弹的真实空气阻力）模拟弹道，精确求解高差与风力，而非线性近似 — 结果显示在 FIRING SOLUTION 面板中。",
        range: "射程 (m)",
        elevationMil: "仰角 (mil)",
        timeSec: "时间 (秒)",
        dispersion: "散布",
        footer: "ARMA REFORGER 迫击炮计算器 v2.0 | 基于游戏内弹道数据",
        createdBy: "制作者:",
        targetPresets: "🎯 目标预设",
        presetInstructions: "PC: 左键（加载）• 右键（保存）| 移动设备: 点击（加载）• 长按（保存）| ✗: 全部清除",
        presetSaved: "已保存",
        presetLoaded: "已加载",
        presetEmpty: "空",
        presetSavedMessage: "目标 {0} 保存成功",
        presetLoadedMessage: "目标 {0} 加载成功",
        clearTarget: "全部清除",
        clearTargetMessage: "所有目标数据和保存的预设已成功清除",
        videoTutorial: "📺 视频教程",
        ringCalculation: "🎯 环形",
        ringTitle: "可用环形",
        calculateRings: "计算环形",
        availableRings: "可用环形:",
        outOfRange: "超出射程",
        noRingsAvailable: "此射程没有可用的环形",
        numpadReference: "🎯 小键盘参考",
        numpadInstructions: "按1-9键根据小键盘位置调整坐标（坐标需要至少3位数字）",
        coordinateErrorMessage: "⚠️ 请输入5位数的网格X和网格Y坐标（例如：10000-99999）",
        coordinateGuide: "📍 基础坐标查找指南 (click)",
        guideScale: "🔍 <strong>比例尺: 1mm = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>报告问题</span>",
        guideStep1: "1. 在游戏中打开地图 (M)",
        guideStep2: "2. 使用尺子从底部刻度测量",
        guideStep3: "3. 查看右下角的X（绿色）和Y（红色）坐标",
        guideStep4: "4. 示例中: X04730, Y06970",
        guideStep5: "5. 将坐标输入到网格X和网格Y字段中",
        visitorStats: "📊 访客统计",
        totalVisits: "总访问量:",
        todayVisits: "今日:",
        onlineNow: "在线:",
        elevationOffset: "⚙️ 仰角偏移",
        offsetInstructions: "当炮弹未达到(-)或超过(+)目标时调整仰角",
        clearOffset: "清除",
        currentOffset: "当前偏移:",
        offsetApplied: "偏移成功应用:",
        offsetCleared: "偏移成功清除",
        presetWithOffset: "保存时包含偏移:",
        presetLoadedWithOffset: "加载时包含偏移:",
        offsetLabel: "补偿",
        usageTerms: "不允许用于任何商业用途。",
        creditRequest: "如果在其他项目中使用，请注明 <strong>Youtube : Sitt Chanel</strong>"
    },
    id: {
        title: "Kalkulator Mortar",
        mortarType: "🎯 Jenis Mortar",
        originalGame: "Game Asli",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] Howitzer M777 155mm",
        shellType: "💥 Jenis Peluru",
        heShell: "Peluru HE",
        smokeShell: "Peluru Asap",
        illuminationShell: "Peluru Penerangan",
        "0832AyShell": "Peluru HE 0-832Ay",
        "A832AYShell": "Peluru Asap A-832AY",
        "C832CShell": "Peluru Penerangan C-832C",
        weaponPosition: "📍 Posisi Senjata",
        weapon: "SENJATA",
        targetPosition: "🎯 Posisi Target",
        target: "TARGET",
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Referensi Grid:",
        gridWarning: "Format referensi grid sesuai dengan tampilan dalam game",
        altitude: "Ketinggian (m):",
        calculate: "🧮 HITUNG",
        firingSolution: "📊 SOLUSI TEMBAKAN",
        distance: "Jarak:",
        azimuth: "Azimuth:",
        elevation: "Elevasi:",
        charge: "Muatan:",
        timeOfFlight: "Waktu Terbang:",
        heightDifference: "Perbedaan Ketinggian:",
        accuracyWarning: "⚠️ Peringatan Akurasi",
        accuracyWarningText: "Jika jarak kompensasi ketinggian lebih dari 100 meter, akan terjadi penyimpangan dampak 50-200 meter",
        ballisticData: "📋 Data Balistik",
        windTitle: "🌬️ Angin (Wind)",
        windDirection: "Arah Angin — DARI (°)",
        windSpeedLabel: "Kecepatan Angin (m/s)",
        windHint: "Samakan dengan indikator angin pada bidikan mortir di game (arah asal angin + kecepatan) — atur kecepatan 0 untuk menonaktifkan koreksi angin",
        advancedTitle: "🧪 Lanjutan (Simulasi Lintasan)",
        advancedToggle: "Aktif",
        advancedIntro: "Mensimulasikan lintasan peluru memakai persamaan dan konstanta langsung dari file game (hambatan udara asli tiap peluru), menyelesaikan beda tinggi dan angin secara eksak, bukan pendekatan linear — hasilnya tampil di panel FIRING SOLUTION.",
        range: "Jangkauan (m)",
        elevationMil: "Elevasi (mil)",
        timeSec: "Waktu (dtk)",
        dispersion: "Penyebaran",
        footer: "Kalkulator Mortar ARMA REFORGER v2.0 | Berdasarkan data balistik dalam game",
        createdBy: "Dibuat oleh:",
        targetPresets: "🎯 Preset Target",
        presetInstructions: "PC: Klik kiri (Muat) • Klik kanan (Simpan) | Mobile: Ketuk (Muat) • Tahan lama (Simpan) | ✗: Hapus Semua",
        presetSaved: "Tersimpan",
        presetLoaded: "Termuat",
        presetEmpty: "Kosong",
        presetSavedMessage: "Target {0} berhasil disimpan",
        presetLoadedMessage: "Target {0} berhasil dimuat",
        clearTarget: "Hapus Semua",
        clearTargetMessage: "Semua data target dan preset tersimpan berhasil dihapus",
        videoTutorial: "📺 Tutorial Video",
        ringCalculation: "🎯 RING",
        ringTitle: "Ring yang Tersedia",
        calculateRings: "Hitung RING",
        availableRings: "Ring yang Tersedia:",
        outOfRange: "Di Luar Jangkauan",
        noRingsAvailable: "Tidak ada ring yang tersedia untuk jangkauan ini",
        numpadReference: "🎯 Referensi Numpad",
        numpadInstructions: "Tekan 1-9 untuk menyesuaikan koordinat sesuai posisi numpad (memerlukan setidaknya 3 digit dalam koordinat)",
        coordinateErrorMessage: "⚠️ Harap masukkan koordinat Grid X dan Grid Y dengan 5 digit (contoh: 10000-99999)",
        coordinateGuide: "📍 Panduan Dasar Mencari Koordinat (click)",
        guideScale: "🔍 <strong>Skala: 1mm = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>Lapor</span>",
        guideStep1: "1. Buka peta dalam game (M)",
        guideStep2: "2. Gunakan penggaris untuk mengukur dari skala di bawah",
        guideStep3: "3. Lihat koordinat X (hijau) dan Y (merah) di kanan bawah",
        guideStep4: "4. Dalam contoh: X04730, Y06970",
        guideStep5: "5. Masukkan koordinat ke dalam field Grid X dan Grid Y",
        visitorStats: "📊 Statistik Pengunjung",
        totalVisits: "Total Kunjungan:",
        todayVisits: "Hari Ini:",
        onlineNow: "Online Sekarang:",
        elevationOffset: "⚙️ Offset Elevasi",
        offsetInstructions: "Sesuaikan elevasi ketika peluru tidak mencapai (-) atau melewati (+) target",
        clearOffset: "Hapus",
        currentOffset: "Offset Saat Ini:",
        offsetApplied: "Offset berhasil diterapkan:",
        offsetCleared: "Offset berhasil dihapus",
        presetWithOffset: "Disimpan dengan offset:",
        presetLoadedWithOffset: "Dimuat dengan offset:",
        offsetLabel: "Koreksi",
        usageTerms: "Tidak diizinkan untuk digunakan untuk tujuan komersial apa pun.",
        creditRequest: "Jika digunakan dalam proyek lain, harap sertakan kredit <strong>Youtube : Sitt Chanel</strong>"
    },
    ru: {
        title: "Минометный калькулятор",
        mortarType: "🎯 Тип миномета",
        originalGame: "Оригинальная игра",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] Гаубица M777 155мм",
        shellType: "💥 Тип снаряда",
        heShell: "Осколочно-фугасный",
        smokeShell: "Дымовой",
        illuminationShell: "Осветительный",
        "0832AyShell": "0-832Ay Осколочно-фугасный",
        "A832AYShell": "A-832AY Дымовой",
        "C832CShell": "C-832C Осветительный",
        weaponPosition: "📍 Позиция орудия",
        weapon: "ОРУДИЕ",
        targetPosition: "🎯 Позиция цели",
        target: "ЦЕЛЬ",
        gridX: "Сетка X (0-99999):",
        gridY: "Сетка Y (0-99999):",
        gridReference: "Координаты (Grid):",
        gridWarning: "Формат координат соответствует игровому отображению карты",
        altitude: "Высота (м):",
        calculate: "🧮 РАССЧИТАТЬ",
        firingSolution: "📊 РЕШЕНИЕ ДЛЯ СТРЕЛЬБЫ",
        distance: "Дистанция:",
        azimuth: "Азимут ⭤ :",
        elevation: "Прицел (тысячные) ⭥ :",
        charge: "Заряд:",
        timeOfFlight: "Время полета:",
        heightDifference: "Разница высот:",
        accuracyWarning: "⚠️ Предупреждение о точности",
        accuracyWarningText: "Если разница высот более 100 метров, отклонение может составить 50-200 метров",
        ballisticData: "📋 Баллистические данные",
        windTitle: "🌬️ Ветер",
        windDirection: "Ветер — откуда (°)",
        windSpeedLabel: "Скорость ветра (м/с)",
        windHint: "Установите по указателю ветра на прицеле в игре (направление, откуда дует ветер + скорость) — скорость 0 отключает поправку на ветер",
        advancedTitle: "🧪 Расширенный расчёт (симуляция траектории)",
        advancedToggle: "Включено",
        advancedIntro: "Моделирует полёт снаряда по уравнению и константам, взятым напрямую из файлов игры (реальное сопротивление воздуха для каждого снаряда), точно решая превышение и ветер вместо линейного приближения — результат показан в панели FIRING SOLUTION.",
        range: "Дистанция (м)",
        elevationMil: "Прицел (mil)",
        timeSec: "Время (сек)",
        dispersion: "Рассеивание",
        footer: "Минометный калькулятор ARMA REFORGER v2.0 | На основе игровых данных",
        createdBy: "Создано:",
        targetPresets: "🎯 Сохраненные цели",
        presetInstructions: "ПК: ЛКМ (Загрузить) • ПКМ (Сохранить) | Мобильные: Нажать (Загрузить) • Удержать (Сохранить) | ✗: Очистить все",
        presetSaved: "Сохранено",
        presetLoaded: "Загружено",
        presetEmpty: "Пусто",
        presetSavedMessage: "Цель {0} успешно сохранена",
        presetLoadedMessage: "Цель {0} успешно загружена",
        clearTarget: "Очистить все",
        clearTargetMessage: "Все данные целей и сохраненные пресеты успешно очищены",
        videoTutorial: "📺 Видео-гайд",
        ringCalculation: "🎯 КОЛЬЦО",
        ringTitle: "Доступные кольца",
        calculateRings: "Рассчитать КОЛЬЦО",
        availableRings: "Доступные кольца:",
        outOfRange: "Вне зоны досягаемости",
        noRingsAvailable: "Нет доступных колец для этой дистанции",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "Нажимайте 1-9 для настройки координат по позиции Numpad (требуется минимум 3 цифры)",
        coordinateErrorMessage: "⚠️ Пожалуйста, введите Grid X и Grid Y (5 цифр, например, 10000-99999)",
        coordinateGuide: "📍 Краткий гайд по поиску координат (клик)",
        guideScale: "🔍 <strong>Масштаб: 1мм = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>Сообщить</span>",
        guideStep1: "1. Откройте карту в игре (M)",
        guideStep2: "2. Используйте линейку для измерения по шкале снизу",
        guideStep3: "3. Проверьте координаты X (зеленый) и Y (красный) справа внизу",
        guideStep4: "4. В примере: X04730, Y06970",
        guideStep5: "5. Введите координаты в поля Grid X и Grid Y",
        visitorStats: "📊 Статистика посещений",
        totalVisits: "Всего посещений:",
        todayVisits: "Сегодня:",
        onlineNow: "Сейчас на сайте:",
        elevationOffset: "⚙️ Корректировка прицела",
        offsetInstructions: "Настройте прицел, если снаряды не долетают (-) или перелетают (+) цель",
        clearOffset: "Сброс",
        currentOffset: "Текущая правка:",
        offsetApplied: "Правка успешно применена:",
        offsetCleared: "Правка успешно сброшена",
        presetWithOffset: "Сохранено с правкой:",
        presetLoadedWithOffset: "Загружено с правкой:",
        offsetLabel: "Правка",
        usageTerms: "Не допускается использование в каких-либо коммерческих целях.",
        creditRequest: "При использовании в других проектах, пожалуйста, укажите автора: <strong>Youtube : Sitt Chanel</strong>"
    },
    uk: {
        title: "Мінометний калькулятор",
        mortarType: "🎯 Тип міномета",
        originalGame: "Оригінальна гра",
        modMortars: "[MOD] Adult Mortars",
        m777Howitzer: "[MOD] Гаубиця M777 155мм",
        shellType: "💥 Тип снаряда",
        heShell: "Осколочно-фугасний",
        smokeShell: "Димовий",
        illuminationShell: "Освітлювальний",
        "0832AyShell": "0-832Ay Осколочно-фугасний",
        "A832AYShell": "A-832AY Димовий",
        "C832CShell": "C-832C Освітлювальний",
        weaponPosition: "📍 Позиція зброї",
        weapon: "ЗБРОЯ",
        targetPosition: "🎯 Позиція цілі",
        target: "ЦІЛЬ",
        gridX: "Сітка X (0-99999):",
        gridY: "Сітка Y (0-99999):",
        gridReference: "Координати (Grid):",
        gridWarning: "Формат координат відповідає ігровому відображенню карти",
        altitude: "Висота (м):",
        calculate: "🧮 РОЗРАХУВАТИ",
        firingSolution: "📊 РІШЕННЯ ДЛЯ СТРІЛЬБИ",
        distance: "Дистанція:",
        azimuth: "Азимут ⭤ :",
        elevation: "Приціл (тисячні) ⭥ :",
        charge: "Заряд:",
        timeOfFlight: "Час польоту:",
        heightDifference: "Різниця висот:",
        accuracyWarning: "⚠️ Попередження про точність",
        accuracyWarningText: "Якщо різниця висот більше 100 метрів, відхилення може становити 50-200 метрів",
        ballisticData: "📋 Балістичні дані",
        windTitle: "🌬️ Вітер",
        windDirection: "Вітер — звідки (°)",
        windSpeedLabel: "Швидкість вітру (м/с)",
        windHint: "Встановіть за покажчиком вітру на прицілі у грі (напрямок, звідки дме вітер + швидкість) — швидкість 0 вимикає поправку на вітер",
        advancedTitle: "🧪 Розширений розрахунок (симуляція траєкторії)",
        advancedToggle: "Увімкнено",
        advancedIntro: "Моделює політ снаряда за рівнянням і константами, взятими прямо з файлів гри (реальний опір повітря для кожного снаряда), точно розв'язуючи перевищення та вітер замість лінійного наближення — результат показано в панелі FIRING SOLUTION.",
        range: "Дистанція (м)",
        elevationMil: "Приціл (mil)",
        timeSec: "Час (сек)",
        dispersion: "Розсіювання",
        footer: "Мінометний калькулятор ARMA REFORGER v2.0 | На основі ігрових даних",
        createdBy: "Створено:",
        targetPresets: "🎯 Збережені цілі",
        presetInstructions: "ПК: ЛКМ (Завантажити) • ПКМ (Зберегти) | Мобільні: Натиснути (Завантажити) • Утримати (Зберегти) | ✗: Очистити все",
        presetSaved: "Збережено",
        presetLoaded: "Завантажено",
        presetEmpty: "Порожньо",
        presetSavedMessage: "Ціль {0} успішно збережена",
        presetLoadedMessage: "Ціль {0} успішно завантажена",
        clearTarget: "Очистити все",
        clearTargetMessage: "Всі дані цілей та збережені пресети успішно очищені",
        videoTutorial: "📺 Відео-гайд",
        ringCalculation: "🎯 КІЛЬЦЕ",
        ringTitle: "Доступні кільця",
        calculateRings: "Розрахувати КІЛЬЦЕ",
        availableRings: "Доступні кільця:",
        outOfRange: "Поза зоною досяжності",
        noRingsAvailable: "Немає доступних кілець для цієї дистанції",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "Натискайте 1-9 для налаштування координат за позицією Numpad (потрібно мінімум 3 цифри)",
        coordinateErrorMessage: "⚠️ Будь ласка, введіть Grid X та Grid Y (5 цифр, наприклад, 10000-99999)",
        coordinateGuide: "📍 Короткий гайд з пошуку координат (клік)",
        guideScale: "🔍 <strong>Масштаб: 1мм = 10</strong>",
        reportIssue: "<span class='report-icon'>🛠️</span><span class='report-text'>Повідомити</span>",
        guideStep1: "1. Відкрийте карту в грі (M)",
        guideStep2: "2. Використовуйте лінійку для вимірювання за шкалою знизу",
        guideStep3: "3. Перевірте координати X (зелений) та Y (червоний) праворуч знизу",
        guideStep4: "4. У прикладі: X04730, Y06970",
        guideStep5: "5. Введіть координати в поля Grid X та Grid Y",
        visitorStats: "📊 Статистика відвідувань",
        totalVisits: "Всього відвідувань:",
        todayVisits: "Сьогодні:",
        onlineNow: "Зараз на сайті:",
        elevationOffset: "⚙️ Коригування прицілу",
        offsetInstructions: "Налаштуйте приціл, якщо снаряди не долітають (-) або перелітають (+) ціль",
        clearOffset: "Скидання",
        currentOffset: "Поточна правка:",
        offsetApplied: "Правка успішно застосована:",
        offsetCleared: "Правка успішно скинута",
        presetWithOffset: "Збережено з правкою:",
        presetLoadedWithOffset: "Завантажено з правкою:",
        offsetLabel: "Правка",
        usageTerms: "Не допускається використання в будь-яких комерційних цілях.",
        creditRequest: "При використанні в інших проєктах, будь ласка, вкажіть автора: <strong>Youtube : Sitt Chanel</strong>"
    },

};

let currentLanguage = 'en'; // Default to English

// Language switching functions
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguageDisplay();

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

function updateLanguageDisplay() {
    const texts = LANGUAGE_DATA[currentLanguage];

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (texts[key]) {
            element.innerHTML = texts[key];
        }
    });

    // Update shell info if calculator is initialized
    if (window.mortarCalculator && window.mortarCalculator.updateShellInfo) {
        window.mortarCalculator.updateShellInfo();
        // Update preset button statuses with new language (exclude clear button)
        for (let i = 1; i <= 9; i++) {
            window.mortarCalculator.updatePresetButtonStatus(i);
        }
        // Refresh RING results if visible
        if (window.mortarCalculator.ringSection && window.mortarCalculator.ringSection.classList.contains('show')) {
            window.mortarCalculator.calculateAvailableRings();
        }
        // Refresh ACE Weather UI language if available
        if (window.mortarCalculator.updateAceWeatherUILanguage) {
            window.mortarCalculator.updateAceWeatherUILanguage();
        }
        // Re-render advanced solution + wind status in the new language
        if (window.mortarCalculator.enableAdvanced && window.mortarCalculator.validateInputs()) {
            window.mortarCalculator.calculate();
        } else if (window.mortarCalculator.updateWindStatus) {
            window.mortarCalculator.updateWindStatus();
        }
    }
}

// Initialize language system
function initializeLanguage() {
    // Get saved preference or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
}

// Ballistic Data for ARMA REFORGER Mortars
// Based on MOD Adult Mortars data from the provided images

const BALLISTIC_DATA = {
    original: {
        // Original game mortar data - M252 (อัพเดทตามภาพ)
        M821: {
            0: [
                { range: 50, elevation: 1540, timeOfFlight: 13.2, dispersion: "61m" },
                { range: 100, elevation: 1479, timeOfFlight: 13.2, dispersion: "63m" },
                { range: 150, elevation: 1416, timeOfFlight: 13.0, dispersion: "66m" },
                { range: 200, elevation: 1350, timeOfFlight: 12.8, dispersion: "71m" },
                { range: 250, elevation: 1279, timeOfFlight: 12.6, dispersion: "78m" },
                { range: 300, elevation: 1201, timeOfFlight: 12.3, dispersion: "95m" },
                { range: 350, elevation: 1106, timeOfFlight: 11.7, dispersion: "151m" },
                { range: 400, elevation: 955, timeOfFlight: 10.7, dispersion: "0m" }
            ],
            1: [
                { range: 200, elevation: 1492, timeOfFlight: 19.9, dispersion: "27m" },
                { range: 300, elevation: 1437, timeOfFlight: 19.7, dispersion: "29m" },
                { range: 400, elevation: 1378, timeOfFlight: 19.5, dispersion: "31m" },
                { range: 500, elevation: 1317, timeOfFlight: 19.2, dispersion: "33m" },
                { range: 600, elevation: 1249, timeOfFlight: 18.8, dispersion: "35m" },
                { range: 700, elevation: 1174, timeOfFlight: 18.3, dispersion: "42m" },
                { range: 800, elevation: 1085, timeOfFlight: 17.5, dispersion: "57m" },
                { range: 900, elevation: 954, timeOfFlight: 16.1, dispersion: "148m" }
            ],
            2: [
                { range: 200, elevation: 1538, timeOfFlight: 26.6, dispersion: "15m" },
                { range: 300, elevation: 1507, timeOfFlight: 26.5, dispersion: "16m" },
                { range: 400, elevation: 1475, timeOfFlight: 26.4, dispersion: "16m" },
                { range: 500, elevation: 1443, timeOfFlight: 26.3, dispersion: "16m" },
                { range: 600, elevation: 1410, timeOfFlight: 26.2, dispersion: "16m" },
                { range: 700, elevation: 1376, timeOfFlight: 26.0, dispersion: "17m" },
                { range: 800, elevation: 1341, timeOfFlight: 25.8, dispersion: "18m" },
                { range: 900, elevation: 1305, timeOfFlight: 25.5, dispersion: "20m" },
                { range: 1000, elevation: 1266, timeOfFlight: 25.2, dispersion: "20m" },
                { range: 1100, elevation: 1225, timeOfFlight: 24.9, dispersion: "22m" },
                { range: 1200, elevation: 1180, timeOfFlight: 24.4, dispersion: "23m" },
                { range: 1300, elevation: 1132, timeOfFlight: 23.9, dispersion: "27m" },
                { range: 1400, elevation: 1076, timeOfFlight: 23.2, dispersion: "31m" },
                { range: 1500, elevation: 1009, timeOfFlight: 22.3, dispersion: "43m" },
                { range: 1600, elevation: 912, timeOfFlight: 20.9, dispersion: "109m" }
            ],
            3: [
                { range: 300, elevation: 1534, timeOfFlight: 31.7, dispersion: "11m" },
                { range: 400, elevation: 1511, timeOfFlight: 31.6, dispersion: "11m" },
                { range: 500, elevation: 1489, timeOfFlight: 31.6, dispersion: "12m" },
                { range: 600, elevation: 1466, timeOfFlight: 31.5, dispersion: "12m" },
                { range: 700, elevation: 1442, timeOfFlight: 31.4, dispersion: "12m" },
                { range: 800, elevation: 1419, timeOfFlight: 31.3, dispersion: "12m" },
                { range: 900, elevation: 1395, timeOfFlight: 31.1, dispersion: "13m" },
                { range: 1000, elevation: 1370, timeOfFlight: 31.0, dispersion: "13m" },
                { range: 1100, elevation: 1344, timeOfFlight: 30.8, dispersion: "13m" },
                { range: 1200, elevation: 1318, timeOfFlight: 30.6, dispersion: "13m" },
                { range: 1300, elevation: 1291, timeOfFlight: 30.3, dispersion: "14m" },
                { range: 1400, elevation: 1263, timeOfFlight: 30.1, dispersion: "15m" },
                // แก้เวลาบิน: เดิม 29.0 ทำให้แถวถัดไป (1600 m) เป็น 29.4 คือเพิ่มขึ้นทั้งที่ยิงไกลกว่า
                { range: 1500, elevation: 1233, timeOfFlight: 29.8, dispersion: "15m" },
                { range: 1600, elevation: 1202, timeOfFlight: 29.4, dispersion: "16m" },
                { range: 1700, elevation: 1169, timeOfFlight: 29.0, dispersion: "17m" },
                { range: 1800, elevation: 1136, timeOfFlight: 28.5, dispersion: "19m" },
                { range: 1900, elevation: 1094, timeOfFlight: 28.0, dispersion: "21m" },
                { range: 2000, elevation: 1051, timeOfFlight: 27.3, dispersion: "26m" },
                { range: 2100, elevation: 999, timeOfFlight: 26.5, dispersion: "31m" },
                { range: 2200, elevation: 931, timeOfFlight: 25.3, dispersion: "46m" },
                { range: 2300, elevation: 801, timeOfFlight: 22.7, dispersion: "0m" }
            ],
            4: [
                { range: 400, elevation: 1531, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 500, elevation: 1514, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 600, elevation: 1496, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 700, elevation: 1478, timeOfFlight: 36.1, dispersion: "9m" },
                { range: 800, elevation: 1460, timeOfFlight: 36.0, dispersion: "9m" },
                { range: 900, elevation: 1442, timeOfFlight: 35.9, dispersion: "9m" },
                { range: 1000, elevation: 1424, timeOfFlight: 35.8, dispersion: "10m" },
                { range: 1100, elevation: 1405, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1200, elevation: 1385, timeOfFlight: 35.6, dispersion: "9m" },
                { range: 1300, elevation: 1366, timeOfFlight: 35.4, dispersion: "10m" },
                { range: 1400, elevation: 1346, timeOfFlight: 35.3, dispersion: "10m" },
                { range: 1500, elevation: 1326, timeOfFlight: 35.1, dispersion: "11m" },
                { range: 1600, elevation: 1305, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1700, elevation: 1283, timeOfFlight: 34.6, dispersion: "11m" },
                { range: 1800, elevation: 1261, timeOfFlight: 34.4, dispersion: "11m" },
                { range: 1900, elevation: 1238, timeOfFlight: 34.1, dispersion: "12m" },
                { range: 2000, elevation: 1214, timeOfFlight: 33.8, dispersion: "12m" },
                { range: 2100, elevation: 1188, timeOfFlight: 33.5, dispersion: "13m" },
                { range: 2200, elevation: 1162, timeOfFlight: 33.1, dispersion: "14m" },
                { range: 2300, elevation: 1134, timeOfFlight: 32.7, dispersion: "15m" },
                { range: 2400, elevation: 1104, timeOfFlight: 32.2, dispersion: "17m" },
                { range: 2500, elevation: 1070, timeOfFlight: 31.7, dispersion: "17m" },
                { range: 2600, elevation: 1034, timeOfFlight: 31.0, dispersion: "20m" },
                { range: 2700, elevation: 993, timeOfFlight: 30.3, dispersion: "25m" },
                { range: 2800, elevation: 942, timeOfFlight: 29.2, dispersion: "31m" },
                { range: 2900, elevation: 870, timeOfFlight: 27.7, dispersion: "64m" }
            ]
        },
        M819: {
            1: [
                { range: 200, elevation: 1463, timeOfFlight: 17.7, dispersion: "36m" },
                { range: 250, elevation: 1427, timeOfFlight: 17.6, dispersion: "36m" },
                { range: 300, elevation: 1391, timeOfFlight: 17.5, dispersion: "39m" },
                { range: 350, elevation: 1352, timeOfFlight: 17.3, dispersion: "38m" },
                { range: 400, elevation: 1314, timeOfFlight: 17.2, dispersion: "43m" },
                { range: 450, elevation: 1271, timeOfFlight: 16.9, dispersion: "44m" },
                { range: 500, elevation: 1227, timeOfFlight: 16.7, dispersion: "49m" },
                { range: 550, elevation: 1178, timeOfFlight: 16.4, dispersion: "54m" },
                { range: 600, elevation: 1124, timeOfFlight: 16.0, dispersion: "64m" },
                { range: 650, elevation: 1060, timeOfFlight: 15.4, dispersion: "78m" },
                { range: 700, elevation: 982, timeOfFlight: 14.7, dispersion: "160m" },
                { range: 750, elevation: 822, timeOfFlight: 13.0, dispersion: "0m" }
            ],
            2: [
                { range: 200, elevation: 1538, timeOfFlight: 24.8, dispersion: "19m" },
                { range: 300, elevation: 1491, timeOfFlight: 24.7, dispersion: "19m" },
                { range: 400, elevation: 1453, timeOfFlight: 24.6, dispersion: "19m" },
                { range: 500, elevation: 1414, timeOfFlight: 24.4, dispersion: "19m" },
                { range: 600, elevation: 1374, timeOfFlight: 24.2, dispersion: "20m" },
                { range: 700, elevation: 1333, timeOfFlight: 24.0, dispersion: "22m" },
                { range: 800, elevation: 1289, timeOfFlight: 23.7, dispersion: "23m" },
                { range: 900, elevation: 1242, timeOfFlight: 23.3, dispersion: "25m" },
                { range: 1000, elevation: 1191, timeOfFlight: 22.9, dispersion: "28m" },
                { range: 1100, elevation: 1135, timeOfFlight: 22.3, dispersion: "31m" },
                { range: 1200, elevation: 1067, timeOfFlight: 21.6, dispersion: "39m" },
                { range: 1300, elevation: 980, timeOfFlight: 20.5, dispersion: "58m" },
                { range: 1400, elevation: 818, timeOfFlight: 18.0, dispersion: "0m" }
            ],
            3: [
                { range: 300, elevation: 1522, timeOfFlight: 29.6, dispersion: "14m" },
                { range: 400, elevation: 1495, timeOfFlight: 29.6, dispersion: "14m" },
                { range: 500, elevation: 1467, timeOfFlight: 29.5, dispersion: "14m" },
                { range: 600, elevation: 1440, timeOfFlight: 29.3, dispersion: "14m" },
                { range: 700, elevation: 1412, timeOfFlight: 29.2, dispersion: "14m" },
                { range: 800, elevation: 1383, timeOfFlight: 29.0, dispersion: "14m" },
                { range: 900, elevation: 1354, timeOfFlight: 28.9, dispersion: "16m" },
                { range: 1000, elevation: 1323, timeOfFlight: 28.6, dispersion: "16m" },
                { range: 1100, elevation: 1291, timeOfFlight: 28.4, dispersion: "17m" },
                { range: 1200, elevation: 1257, timeOfFlight: 28.1, dispersion: "18m" },
                { range: 1300, elevation: 1221, timeOfFlight: 27.7, dispersion: "20m" },
                { range: 1400, elevation: 1183, timeOfFlight: 27.3, dispersion: "23m" },
                { range: 1500, elevation: 1142, timeOfFlight: 26.8, dispersion: "25m" },
                { range: 1600, elevation: 1096, timeOfFlight: 26.2, dispersion: "30m" },
                { range: 1700, elevation: 1044, timeOfFlight: 25.5, dispersion: "38m" },
                { range: 1800, elevation: 980, timeOfFlight: 24.5, dispersion: "84m" },
                { range: 1900, elevation: 892, timeOfFlight: 23.0, dispersion: "0m" }
            ],
            4: [
                { range: 400, elevation: 1517, timeOfFlight: 33.6, dispersion: "11m" },
                { range: 500, elevation: 1495, timeOfFlight: 33.5, dispersion: "10m" },
                { range: 600, elevation: 1474, timeOfFlight: 33.5, dispersion: "11m" },
                { range: 700, elevation: 1452, timeOfFlight: 33.4, dispersion: "11m" },
                { range: 800, elevation: 1429, timeOfFlight: 33.2, dispersion: "11m" },
                { range: 900, elevation: 1407, timeOfFlight: 33.1, dispersion: "12m" },
                { range: 1000, elevation: 1383, timeOfFlight: 33.0, dispersion: "11m" },
                { range: 1100, elevation: 1360, timeOfFlight: 32.8, dispersion: "12m" },
                { range: 1200, elevation: 1335, timeOfFlight: 32.6, dispersion: "12m" },
                { range: 1300, elevation: 1310, timeOfFlight: 32.4, dispersion: "13m" },
                { range: 1400, elevation: 1284, timeOfFlight: 32.1, dispersion: "14m" },
                { range: 1500, elevation: 1257, timeOfFlight: 31.9, dispersion: "14m" },
                { range: 1600, elevation: 1228, timeOfFlight: 31.6, dispersion: "15m" },
                { range: 1700, elevation: 1199, timeOfFlight: 31.2, dispersion: "17m" },
                { range: 1800, elevation: 1166, timeOfFlight: 30.8, dispersion: "16m" },
                { range: 1900, elevation: 1132, timeOfFlight: 30.3, dispersion: "18m" },
                { range: 2000, elevation: 1096, timeOfFlight: 29.8, dispersion: "21m" },
                { range: 2100, elevation: 1055, timeOfFlight: 29.1, dispersion: "23m" },
                { range: 2200, elevation: 1008, timeOfFlight: 28.4, dispersion: "28m" },
                { range: 2300, elevation: 952, timeOfFlight: 27.4, dispersion: "36m" },
                { range: 2400, elevation: 871, timeOfFlight: 25.8, dispersion: "67m" }
            ]
        },
        M853A1: {
            1: [
                { range: 200, elevation: 1463, timeOfFlight: 18.1, dispersion: "35m" },
                { range: 250, elevation: 1428, timeOfFlight: 18.0, dispersion: "37m" },
                { range: 300, elevation: 1391, timeOfFlight: 17.9, dispersion: "39m" },
                { range: 350, elevation: 1352, timeOfFlight: 17.7, dispersion: "40m" },
                { range: 400, elevation: 1312, timeOfFlight: 17.5, dispersion: "43m" },
                { range: 450, elevation: 1269, timeOfFlight: 17.3, dispersion: "45m" },
                { range: 500, elevation: 1224, timeOfFlight: 17.0, dispersion: "49m" },
                { range: 550, elevation: 1175, timeOfFlight: 16.7, dispersion: "55m" },
                { range: 600, elevation: 1120, timeOfFlight: 16.3, dispersion: "65m" },
                { range: 650, elevation: 1055, timeOfFlight: 15.7, dispersion: "81m" },
                { range: 700, elevation: 974, timeOfFlight: 15.0, dispersion: "151m" },
                { range: 750, elevation: 823, timeOfFlight: 13.3, dispersion: "0m" }
            ],
            2: [
                { range: 200, elevation: 1529, timeOfFlight: 26.2, dispersion: "17m" },
                { range: 300, elevation: 1496, timeOfFlight: 26.1, dispersion: "18m" },
                { range: 400, elevation: 1457, timeOfFlight: 26.0, dispersion: "19m" },
                { range: 500, elevation: 1419, timeOfFlight: 25.8, dispersion: "19m" },
                { range: 600, elevation: 1379, timeOfFlight: 25.6, dispersion: "20m" },
                { range: 700, elevation: 1338, timeOfFlight: 25.4, dispersion: "21m" },
                { range: 800, elevation: 1295, timeOfFlight: 25.1, dispersion: "23m" },
                { range: 900, elevation: 1249, timeOfFlight: 24.7, dispersion: "25m" },
                { range: 1000, elevation: 1199, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1100, elevation: 1144, timeOfFlight: 23.7, dispersion: "30m" },
                { range: 1200, elevation: 1081, timeOfFlight: 23.0, dispersion: "35m" },
                { range: 1300, elevation: 1005, timeOfFlight: 22.0, dispersion: "47m" },
                { range: 1400, elevation: 900, timeOfFlight: 20.5, dispersion: "98m" }
            ],
            3: [
                { range: 300, elevation: 1521, timeOfFlight: 31.1, dispersion: "14m" },
                { range: 400, elevation: 1494, timeOfFlight: 31.1, dispersion: "14m" },
                { range: 500, elevation: 1466, timeOfFlight: 31.0, dispersion: "14m" },
                { range: 600, elevation: 1438, timeOfFlight: 30.8, dispersion: "14m" },
                { range: 700, elevation: 1409, timeOfFlight: 30.7, dispersion: "14m" },
                { range: 800, elevation: 1380, timeOfFlight: 30.5, dispersion: "16m" },
                { range: 900, elevation: 1349, timeOfFlight: 30.3, dispersion: "16m" },
                { range: 1000, elevation: 1317, timeOfFlight: 30.1, dispersion: "16m" },
                { range: 1100, elevation: 1284, timeOfFlight: 29.8, dispersion: "18m" },
                { range: 1200, elevation: 1249, timeOfFlight: 29.4, dispersion: "19m" },
                { range: 1300, elevation: 1212, timeOfFlight: 29.1, dispersion: "20m" },
                { range: 1400, elevation: 1172, timeOfFlight: 28.6, dispersion: "21m" },
                { range: 1500, elevation: 1128, timeOfFlight: 28.1, dispersion: "22m" },
                { range: 1600, elevation: 1081, timeOfFlight: 27.4, dispersion: "26m" },
                { range: 1700, elevation: 1027, timeOfFlight: 26.6, dispersion: "30m" },
                { range: 1800, elevation: 962, timeOfFlight: 25.6, dispersion: "39m" },
                { range: 1900, elevation: 875, timeOfFlight: 24.1, dispersion: "67m" }
            ],
            4: [
                { range: 400, elevation: 1515, timeOfFlight: 35.7, dispersion: "11m" },
                { range: 500, elevation: 1493, timeOfFlight: 35.7, dispersion: "11m" },
                { range: 600, elevation: 1471, timeOfFlight: 35.6, dispersion: "11m" },
                { range: 700, elevation: 1448, timeOfFlight: 35.5, dispersion: "11m" },
                { range: 800, elevation: 1426, timeOfFlight: 35.4, dispersion: "12m" },
                { range: 900, elevation: 1402, timeOfFlight: 35.2, dispersion: "12m" },
                { range: 1000, elevation: 1378, timeOfFlight: 35.0, dispersion: "12m" },
                { range: 1100, elevation: 1353, timeOfFlight: 34.8, dispersion: "13m" },
                { range: 1200, elevation: 1328, timeOfFlight: 34.6, dispersion: "13m" },
                { range: 1300, elevation: 1301, timeOfFlight: 34.4, dispersion: "14m" },
                { range: 1400, elevation: 1274, timeOfFlight: 34.1, dispersion: "14m" },
                { range: 1500, elevation: 1245, timeOfFlight: 33.8, dispersion: "15m" },
                { range: 1600, elevation: 1215, timeOfFlight: 33.4, dispersion: "15m" },
                { range: 1700, elevation: 1184, timeOfFlight: 33.0, dispersion: "17m" },
                { range: 1800, elevation: 1151, timeOfFlight: 32.6, dispersion: "18m" },
                { range: 1900, elevation: 1115, timeOfFlight: 32.1, dispersion: "19m" },
                { range: 2000, elevation: 1076, timeOfFlight: 31.5, dispersion: "21m" },
                { range: 2100, elevation: 1033, timeOfFlight: 30.8, dispersion: "23m" },
                { range: 2200, elevation: 985, timeOfFlight: 29.9, dispersion: "27m" },
                { range: 2300, elevation: 928, timeOfFlight: 28.8, dispersion: "33m" },
                { range: 2400, elevation: 855, timeOfFlight: 27.4, dispersion: "52m" }
            ]
        },

        "0-832Ay": {
            // 0 Ring - Original (Dispersion: 8m ตามภาพที่ 2)
            0: [
                { range: 50, elevation: 1455, timeOfFlight: 15, dispersion: "44m" },
                { range: 100, elevation: 1411, timeOfFlight: 15, dispersion: "46m" },
                { range: 150, elevation: 1365, timeOfFlight: 14.9, dispersion: "47m" },
                { range: 200, elevation: 1318, timeOfFlight: 14.8, dispersion: "50m" },
                { range: 250, elevation: 1268, timeOfFlight: 14.6, dispersion: "51m" },
                { range: 300, elevation: 1217, timeOfFlight: 14.4, dispersion: "58m" },
                { range: 350, elevation: 1159, timeOfFlight: 14.1, dispersion: "64m" },
                { range: 400, elevation: 1095, timeOfFlight: 13.7, dispersion: "72m" },
                { range: 450, elevation: 1023, timeOfFlight: 13.2, dispersion: "101m" },
                { range: 500, elevation: 922, timeOfFlight: 12.4, dispersion: "0m" }
            ],
            // 1 Ring - Original (Dispersion: 13m ตามภาพที่ 1)
            1: [
                { range: 100, elevation: 1446, timeOfFlight: 19.5, dispersion: "27m" },
                { range: 200, elevation: 1392, timeOfFlight: 19.4, dispersion: "28m" },
                { range: 300, elevation: 1335, timeOfFlight: 19.2, dispersion: "29m" },
                { range: 400, elevation: 1275, timeOfFlight: 18.9, dispersion: "31m" },
                { range: 500, elevation: 1212, timeOfFlight: 18.6, dispersion: "35m" },
                { range: 600, elevation: 1141, timeOfFlight: 18.1, dispersion: "40m" },
                { range: 700, elevation: 1058, timeOfFlight: 17.4, dispersion: "48m" },
                { range: 800, elevation: 952, timeOfFlight: 16.4, dispersion: "81m" }
            ],
            // 2 Ring - Original (Dispersion: 19m ตามภาพที่ 1)
            2: [
                { range: 200, elevation: 1432, timeOfFlight: 24.8, dispersion: "17m" },
                { range: 300, elevation: 1397, timeOfFlight: 24.7, dispersion: "18m" },
                { range: 400, elevation: 1362, timeOfFlight: 24.6, dispersion: "18m" },
                { range: 500, elevation: 1325, timeOfFlight: 24.4, dispersion: "18m" },
                { range: 600, elevation: 1288, timeOfFlight: 24.2, dispersion: "20m" },
                { range: 700, elevation: 1248, timeOfFlight: 24, dispersion: "20m" },
                { range: 800, elevation: 1207, timeOfFlight: 23.7, dispersion: "22m" },
                { range: 900, elevation: 1162, timeOfFlight: 23.3, dispersion: "23m" },
                { range: 1000, elevation: 1114, timeOfFlight: 22.9, dispersion: "26m" },
                { range: 1100, elevation: 1060, timeOfFlight: 22.3, dispersion: "29m" },
                { range: 1200, elevation: 997, timeOfFlight: 21.5, dispersion: "37m" },
                { range: 1300, elevation: 914, timeOfFlight: 20.4, dispersion: "55m" },
                { range: 1400, elevation: 755, timeOfFlight: 17.8, dispersion: "0m" }
            ],
            // 3 Ring - Original (Dispersion: 27m ตามภาพที่ 1)
            3: [
                { range: 300, elevation: 1423, timeOfFlight: 28.9, dispersion: "13m" },
                { range: 400, elevation: 1397, timeOfFlight: 28.8, dispersion: "14m" },
                { range: 500, elevation: 1370, timeOfFlight: 28.6, dispersion: "13m" },
                { range: 600, elevation: 1343, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 700, elevation: 1315, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 800, elevation: 1286, timeOfFlight: 28.3, dispersion: "14m" },
                { range: 900, elevation: 1257, timeOfFlight: 28.1, dispersion: "16m" },
                { range: 1000, elevation: 1226, timeOfFlight: 27.9, dispersion: "16m" },
                { range: 1100, elevation: 1193, timeOfFlight: 27.6, dispersion: "16m" },
                { range: 1200, elevation: 1159, timeOfFlight: 27.2, dispersion: "18m" },
                { range: 1300, elevation: 1123, timeOfFlight: 26.8, dispersion: "19m" },
                { range: 1400, elevation: 1084, timeOfFlight: 26.4, dispersion: "22m" },
                { range: 1500, elevation: 1040, timeOfFlight: 25.8, dispersion: "24m" },
                { range: 1600, elevation: 991, timeOfFlight: 25.1, dispersion: "28m" },
                { range: 1700, elevation: 932, timeOfFlight: 24.2, dispersion: "36m" },
                { range: 1800, elevation: 851, timeOfFlight: 22.8, dispersion: "68m" }
            ],
            // 4 Ring - Original (Dispersion: 34m ตามภาพที่ 1)
            4: [
                { range: 400, elevation: 1418, timeOfFlight: 32.9, dispersion: "10m" },
                { range: 500, elevation: 1398, timeOfFlight: 32.9, dispersion: "11m" },
                { range: 600, elevation: 1376, timeOfFlight: 32.8, dispersion: "10m" },
                { range: 700, elevation: 1355, timeOfFlight: 32.7, dispersion: "11m" },
                { range: 800, elevation: 1333, timeOfFlight: 32.6, dispersion: "11m" },
                { range: 900, elevation: 1311, timeOfFlight: 32.4, dispersion: "12m" },
                { range: 1000, elevation: 1288, timeOfFlight: 32.2, dispersion: "12m" },
                { range: 1100, elevation: 1264, timeOfFlight: 32.1, dispersion: "12m" },
                { range: 1200, elevation: 1240, timeOfFlight: 31.8, dispersion: "13m" },
                { range: 1300, elevation: 1215, timeOfFlight: 31.6, dispersion: "13m" },
                { range: 1400, elevation: 1189, timeOfFlight: 31.3, dispersion: "14m" },
                { range: 1500, elevation: 1161, timeOfFlight: 31, dispersion: "14m" },
                { range: 1600, elevation: 1133, timeOfFlight: 30.7, dispersion: "15m" },
                { range: 1700, elevation: 1102, timeOfFlight: 30.3, dispersion: "16m" },
                { range: 1800, elevation: 1069, timeOfFlight: 29.8, dispersion: "17m" },
                { range: 1900, elevation: 1034, timeOfFlight: 29.3, dispersion: "19m" },
                { range: 2000, elevation: 995, timeOfFlight: 28.7, dispersion: "22m" },
                { range: 2100, elevation: 950, timeOfFlight: 27.9, dispersion: "26m" },
                { range: 2200, elevation: 896, timeOfFlight: 26.9, dispersion: "34m" },
                { range: 2300, elevation: 820, timeOfFlight: 25.3, dispersion: "65m" }
            ]
        },
        "A-832AY": {
            // 0 Ring - Original (Dispersion: 7m ตามภาพที่ 1)
            0: [
                { range: 50, elevation: 1450, timeOfFlight: 14.1, dispersion: "51m" },
                { range: 100, elevation: 1399, timeOfFlight: 14, dispersion: "52m" },
                { range: 150, elevation: 1347, timeOfFlight: 13.9, dispersion: "55m" },
                { range: 200, elevation: 1292, timeOfFlight: 13.8, dispersion: "57m" },
                { range: 250, elevation: 1235, timeOfFlight: 13.6, dispersion: "63m" },
                { range: 300, elevation: 1172, timeOfFlight: 13.3, dispersion: "70m" },
                { range: 350, elevation: 1102, timeOfFlight: 12.9, dispersion: "82m" },
                { range: 400, elevation: 1020, timeOfFlight: 12.4, dispersion: "122m" },
                { range: 450, elevation: 898, timeOfFlight: 11.4, dispersion: "0m" }
            ],
            // 1 Ring - Original (Dispersion: 12m ตามภาพที่ 2)  
            1: [
                { range: 200, elevation: 1381, timeOfFlight: 18.4, dispersion: "31m" },
                { range: 300, elevation: 1319, timeOfFlight: 18.2, dispersion: "33m" },
                { range: 400, elevation: 1252, timeOfFlight: 17.9, dispersion: "34m" },
                { range: 500, elevation: 1179, timeOfFlight: 17.5, dispersion: "38m" },
                { range: 600, elevation: 1097, timeOfFlight: 16.9, dispersion: "47m" },
                { range: 700, elevation: 993, timeOfFlight: 16.0, dispersion: "67m" },
                { range: 800, elevation: 805, timeOfFlight: 13.9, dispersion: "0m" }
            ],
            // 2 Ring - Original (Dispersion: 18m ตามภาพที่ 3)
            2: [
                { range: 300, elevation: 1387, timeOfFlight: 23.5, dispersion: "19m" },
                // แก้เวลาบิน: เดิม 23.8 มากกว่าแถวก่อนหน้า (300 m = 23.5) ทั้งที่ยิงไกลกว่า
                { range: 400, elevation: 1348, timeOfFlight: 23.4, dispersion: "20m" },
                { range: 500, elevation: 1308, timeOfFlight: 23.2, dispersion: "21m" },
                { range: 600, elevation: 1266, timeOfFlight: 22.9, dispersion: "22m" },
                { range: 700, elevation: 1222, timeOfFlight: 22.7, dispersion: "24m" },
                { range: 800, elevation: 1175, timeOfFlight: 22.3, dispersion: "26m" },
                { range: 900, elevation: 1123, timeOfFlight: 21.8, dispersion: "28m" },
                { range: 1000, elevation: 1065, timeOfFlight: 21.3, dispersion: "32m" },
                { range: 1100, elevation: 994, timeOfFlight: 20.4, dispersion: "40m" },
                { range: 1200, elevation: 902, timeOfFlight: 19.2, dispersion: "64m" }
            ],
            // 3 Ring - Original (Dispersion: 24m ตามภาพที่ 4)
            3: [
                { range: 400, elevation: 1387, timeOfFlight: 27.3, dispersion: "15m" },
                { range: 500, elevation: 1357, timeOfFlight: 27.2, dispersion: "15m" },
                { range: 600, elevation: 1327, timeOfFlight: 27.1, dispersion: "15m" },
                { range: 700, elevation: 1296, timeOfFlight: 26.9, dispersion: "16m" },
                { range: 800, elevation: 1264, timeOfFlight: 26.7, dispersion: "16m" },
                { range: 900, elevation: 1231, timeOfFlight: 26.5, dispersion: "17m" },
                { range: 1000, elevation: 1196, timeOfFlight: 26.2, dispersion: "18m" },
                { range: 1100, elevation: 1159, timeOfFlight: 25.8, dispersion: "20m" },
                { range: 1200, elevation: 1119, timeOfFlight: 25.4, dispersion: "22m" },
                { range: 1300, elevation: 1075, timeOfFlight: 24.9, dispersion: "24m" },
                { range: 1400, elevation: 1026, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1500, elevation: 969, timeOfFlight: 23.5, dispersion: "33m" },
                { range: 1600, elevation: 896, timeOfFlight: 22.3, dispersion: "50m" },
                { range: 1700, elevation: 753, timeOfFlight: 19.8, dispersion: "0m" }
            ]
        },

        "C-832C": {
            // 1 Ring - Original C-832C Illumination (ตามภาพ Ring 1 - Dispersion: 9m)
            1: [
                // แก้เวลาบิน: เดิม 15.2 น้อยกว่าแถวถัดไป (150 m = 16.3) ทั้งที่ยิงใกล้กว่า
                // ยิงที่มุมยกของแถวนี้เอง (1421 mils = 85.26°) ได้ระยะ 101 m ตรงตาราง แต่เวลาบิน 16.47
                { range: 100, elevation: 1421, timeOfFlight: 16.5, dispersion: "40m" },
                { range: 150, elevation: 1381, timeOfFlight: 16.3, dispersion: "42m" },
                { range: 200, elevation: 1339, timeOfFlight: 16.2, dispersion: "43m" },
                { range: 250, elevation: 1296, timeOfFlight: 16.1, dispersion: "46m" },
                { range: 300, elevation: 1251, timeOfFlight: 15.9, dispersion: "48m" },
                { range: 350, elevation: 1203, timeOfFlight: 15.7, dispersion: "52m" },
                { range: 400, elevation: 1151, timeOfFlight: 15.4, dispersion: "58m" },
                { range: 450, elevation: 1093, timeOfFlight: 15, dispersion: "65m" },
                { range: 500, elevation: 1028, timeOfFlight: 14.5, dispersion: "83m" },
                { range: 550, elevation: 945, timeOfFlight: 13.8, dispersion: "146m" },
                { range: 600, elevation: 799, timeOfFlight: 12.3, dispersion: "0m" }
            ],
            // 2 Ring - Original C-832C Illumination (ตามภาพ Ring 2 - Dispersion: 17m)
            2: [
                { range: 200, elevation: 1417, timeOfFlight: 23.6, dispersion: "21m" },
                { range: 300, elevation: 1374, timeOfFlight: 23.5, dispersion: "22m" },
                { range: 400, elevation: 1330, timeOfFlight: 23.3, dispersion: "23m" },
                { range: 500, elevation: 1284, timeOfFlight: 23.1, dispersion: "24m" },
                { range: 600, elevation: 1234, timeOfFlight: 22.8, dispersion: "25m" },
                { range: 700, elevation: 1182, timeOfFlight: 22.4, dispersion: "29m" },
                { range: 800, elevation: 1124, timeOfFlight: 21.9, dispersion: "32m" },
                { range: 900, elevation: 1057, timeOfFlight: 21.3, dispersion: "36m" },
                { range: 1000, elevation: 979, timeOfFlight: 20.4, dispersion: "48m" },
                { range: 1100, elevation: 870, timeOfFlight: 18.9, dispersion: "89m" }
            ],
            // 3 Ring - Original C-832C Illumination (ตามภาพ Ring 3 - Dispersion: 24m)
            3: [
                { range: 300, elevation: 1411, timeOfFlight: 29, dispersion: "16m" },
                { range: 400, elevation: 1380, timeOfFlight: 28.9, dispersion: "16m" },
                { range: 500, elevation: 1348, timeOfFlight: 28.7, dispersion: "16m" },
                { range: 600, elevation: 1315, timeOfFlight: 28.6, dispersion: "16m" },
                { range: 700, elevation: 1281, timeOfFlight: 28.4, dispersion: "17m" },
                { range: 800, elevation: 1246, timeOfFlight: 28.1, dispersion: "18m" },
                { range: 900, elevation: 1209, timeOfFlight: 27.8, dispersion: "19m" },
                { range: 1000, elevation: 1170, timeOfFlight: 27.4, dispersion: "21m" },
                { range: 1100, elevation: 1128, timeOfFlight: 27, dispersion: "23m" },
                { range: 1200, elevation: 1082, timeOfFlight: 26.5, dispersion: "25m" },
                { range: 1300, elevation: 1031, timeOfFlight: 25.8, dispersion: "28m" },
                { range: 1400, elevation: 973, timeOfFlight: 25, dispersion: "33m" },
                { range: 1500, elevation: 903, timeOfFlight: 23.9, dispersion: "43m" },
                { range: 1600, elevation: 807, timeOfFlight: 22.3, dispersion: "0m" }
            ],
            // 4 Ring - Original C-832C Illumination (ตามภาพ Ring 4 - Dispersion: 32m)
            4: [
                { range: 400, elevation: 1411, timeOfFlight: 35.3, dispersion: "12m" },
                { range: 500, elevation: 1388, timeOfFlight: 35.2, dispersion: "12m" },
                { range: 600, elevation: 1364, timeOfFlight: 35.1, dispersion: "11m" },
                { range: 700, elevation: 1341, timeOfFlight: 35, dispersion: "13m" },
                { range: 800, elevation: 1316, timeOfFlight: 34.8, dispersion: "13m" },
                { range: 900, elevation: 1291, timeOfFlight: 34.7, dispersion: "13m" },
                { range: 1000, elevation: 1265, timeOfFlight: 34.4, dispersion: "13m" },
                { range: 1100, elevation: 1238, timeOfFlight: 34.2, dispersion: "14m" },
                { range: 1200, elevation: 1210, timeOfFlight: 33.9, dispersion: "14m" },
                { range: 1300, elevation: 1181, timeOfFlight: 33.6, dispersion: "15m" },
                { range: 1400, elevation: 1150, timeOfFlight: 33.2, dispersion: "15m" },
                { range: 1500, elevation: 1119, timeOfFlight: 32.8, dispersion: "17m" },
                { range: 1600, elevation: 1085, timeOfFlight: 32.4, dispersion: "18m" },
                { range: 1700, elevation: 1048, timeOfFlight: 31.8, dispersion: "19m" },
                { range: 1800, elevation: 1009, timeOfFlight: 31.2, dispersion: "21m" },
                { range: 1900, elevation: 965, timeOfFlight: 30.4, dispersion: "23m" },
                { range: 2000, elevation: 917, timeOfFlight: 29.6, dispersion: "27m" },
                { range: 2100, elevation: 860, timeOfFlight: 28.4, dispersion: "34m" },
                { range: 2200, elevation: 787, timeOfFlight: 26.9, dispersion: "0m" }
            ]
        }
    },
    mod: {
        M821: {
            // Charge 0 - Dispersion: 10m
            0: [
                { range: 50, elevation: 1540, timeOfFlight: 13.2, dispersion: "61m" },
                { range: 100, elevation: 1479, timeOfFlight: 13.2, dispersion: "63m" },
                { range: 150, elevation: 1416, timeOfFlight: 13.0, dispersion: "66m" },
                { range: 200, elevation: 1350, timeOfFlight: 12.8, dispersion: "71m" },
                { range: 250, elevation: 1279, timeOfFlight: 12.6, dispersion: "78m" },
                { range: 300, elevation: 1201, timeOfFlight: 12.3, dispersion: "95m" },
                { range: 350, elevation: 1106, timeOfFlight: 11.7, dispersion: "151m" },
                { range: 400, elevation: 955, timeOfFlight: 10.7, dispersion: "0m" }
            ],
            // Charge 1 - Dispersion: 23m (ตามตารางในภาพ)
            1: [
                { range: 300, elevation: 1520, timeOfFlight: 28.6, dispersion: "14m" },
                { range: 400, elevation: 1492, timeOfFlight: 28.6, dispersion: "13m" },
                { range: 500, elevation: 1465, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 600, elevation: 1437, timeOfFlight: 28.3, dispersion: "15m" },
                { range: 700, elevation: 1408, timeOfFlight: 28.2, dispersion: "15m" },
                { range: 800, elevation: 1378, timeOfFlight: 28.0, dispersion: "15m" },
                { range: 900, elevation: 1348, timeOfFlight: 27.9, dispersion: "16m" },
                { range: 1000, elevation: 1316, timeOfFlight: 27.6, dispersion: "15m" },
                { range: 1100, elevation: 1284, timeOfFlight: 27.5, dispersion: "17m" },
                { range: 1200, elevation: 1249, timeOfFlight: 27.1, dispersion: "18m" },
                { range: 1300, elevation: 1213, timeOfFlight: 26.7, dispersion: "20m" },
                { range: 1400, elevation: 1173, timeOfFlight: 26.3, dispersion: "20m" },
                { range: 1500, elevation: 1130, timeOfFlight: 25.7, dispersion: "23m" },
                { range: 1600, elevation: 1082, timeOfFlight: 25.1, dispersion: "26m" },
                { range: 1700, elevation: 1026, timeOfFlight: 24.3, dispersion: "33m" },
                { range: 1800, elevation: 955, timeOfFlight: 23.2, dispersion: "50m" },
                { range: 1900, elevation: 841, timeOfFlight: 20.7, dispersion: "0m" }
            ],
            // Charge 2 - MOD Adult Mortars (2 Rings) - Average Dispersion: 39m
            2: [
                { range: 500, elevation: 1523, timeOfFlight: 38.6, dispersion: "8m" },
                { range: 600, elevation: 1507, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 700, elevation: 1491, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 800, elevation: 1475, timeOfFlight: 38.4, dispersion: "8m" },
                { range: 900, elevation: 1459, timeOfFlight: 38.3, dispersion: "8m" },
                { range: 1000, elevation: 1443, timeOfFlight: 38.2, dispersion: "8m" },
                { range: 1100, elevation: 1426, timeOfFlight: 38.1, dispersion: "8m" },
                { range: 1200, elevation: 1410, timeOfFlight: 38.0, dispersion: "9m" },
                { range: 1300, elevation: 1393, timeOfFlight: 37.9, dispersion: "9m" },
                { range: 1400, elevation: 1375, timeOfFlight: 37.7, dispersion: "9m" },
                { range: 1500, elevation: 1358, timeOfFlight: 37.6, dispersion: "9m" },
                { range: 1600, elevation: 1339, timeOfFlight: 37.4, dispersion: "9m" },
                { range: 1700, elevation: 1321, timeOfFlight: 37.3, dispersion: "9m" },
                { range: 1800, elevation: 1302, timeOfFlight: 37.1, dispersion: "10m" },
                { range: 1900, elevation: 1282, timeOfFlight: 36.8, dispersion: "10m" },
                { range: 2000, elevation: 1263, timeOfFlight: 36.6, dispersion: "10m" },
                { range: 2100, elevation: 1242, timeOfFlight: 36.3, dispersion: "11m" },
                { range: 2200, elevation: 1220, timeOfFlight: 36.1, dispersion: "10m" },
                { range: 2300, elevation: 1199, timeOfFlight: 35.8, dispersion: "12m" },
                { range: 2400, elevation: 1175, timeOfFlight: 35.4, dispersion: "12m" },
                { range: 2500, elevation: 1151, timeOfFlight: 35.1, dispersion: "13m" },
                { range: 2600, elevation: 1125, timeOfFlight: 34.6, dispersion: "14m" },
                { range: 2700, elevation: 1098, timeOfFlight: 34.2, dispersion: "16m" },
                { range: 2800, elevation: 1067, timeOfFlight: 33.6, dispersion: "15m" },
                { range: 2900, elevation: 1035, timeOfFlight: 33.0, dispersion: "18m" },
                { range: 3000, elevation: 999, timeOfFlight: 32.3, dispersion: "22m" },
                { range: 3100, elevation: 955, timeOfFlight: 31.4, dispersion: "26m" },
                { range: 3200, elevation: 901, timeOfFlight: 30.2, dispersion: "39m" },
                { range: 3300, elevation: 804, timeOfFlight: 27.8, dispersion: "0m" }
            ],
            // Charge 3 - MOD Adult Mortars (3 Rings) - Average Dispersion: 54m
            3: [
                { range: 700, elevation: 1522, timeOfFlight: 46.5, dispersion: "6m" },
                { range: 800, elevation: 1511, timeOfFlight: 46.4, dispersion: "6m" },
                { range: 900, elevation: 1499, timeOfFlight: 46.4, dispersion: "5m" },
                { range: 1000, elevation: 1488, timeOfFlight: 46.3, dispersion: "6m" },
                { range: 1100, elevation: 1476, timeOfFlight: 46.3, dispersion: "5m" },
                { range: 1200, elevation: 1465, timeOfFlight: 46.2, dispersion: "6m" },
                { range: 1300, elevation: 1453, timeOfFlight: 46.1, dispersion: "6m" },
                { range: 1400, elevation: 1441, timeOfFlight: 46.0, dispersion: "6m" },
                { range: 1500, elevation: 1429, timeOfFlight: 45.9, dispersion: "6m" },
                { range: 1600, elevation: 1417, timeOfFlight: 45.9, dispersion: "6m" },
                { range: 1700, elevation: 1405, timeOfFlight: 45.8, dispersion: "6m" },
                { range: 1800, elevation: 1393, timeOfFlight: 45.6, dispersion: "7m" },
                { range: 1900, elevation: 1380, timeOfFlight: 45.5, dispersion: "6m" },
                { range: 2000, elevation: 1367, timeOfFlight: 45.4, dispersion: "6m" },
                { range: 2100, elevation: 1354, timeOfFlight: 45.3, dispersion: "6m" },
                { range: 2200, elevation: 1341, timeOfFlight: 45.1, dispersion: "6m" },
                { range: 2300, elevation: 1328, timeOfFlight: 45.0, dispersion: "7m" },
                { range: 2400, elevation: 1314, timeOfFlight: 44.8, dispersion: "6m" },
                { range: 2500, elevation: 1301, timeOfFlight: 44.6, dispersion: "7m" },
                { range: 2600, elevation: 1287, timeOfFlight: 44.4, dispersion: "7m" },
                { range: 2700, elevation: 1272, timeOfFlight: 44.3, dispersion: "7m" },
                { range: 2800, elevation: 1258, timeOfFlight: 44.0, dispersion: "8m" },
                { range: 2900, elevation: 1243, timeOfFlight: 43.8, dispersion: "8m" },
                { range: 3000, elevation: 1227, timeOfFlight: 43.6, dispersion: "8m" },
                { range: 3100, elevation: 1211, timeOfFlight: 43.3, dispersion: "8m" },
                { range: 3200, elevation: 1195, timeOfFlight: 43.0, dispersion: "8m" },
                { range: 3300, elevation: 1178, timeOfFlight: 42.8, dispersion: "9m" },
                { range: 3400, elevation: 1161, timeOfFlight: 42.4, dispersion: "9m" },
                { range: 3500, elevation: 1142, timeOfFlight: 42.1, dispersion: "9m" },
                { range: 3600, elevation: 1124, timeOfFlight: 41.7, dispersion: "10m" },
                { range: 3700, elevation: 1104, timeOfFlight: 41.3, dispersion: "10m" },
                { range: 3800, elevation: 1083, timeOfFlight: 40.9, dispersion: "11m" },
                { range: 3900, elevation: 1061, timeOfFlight: 40.4, dispersion: "11m" },
                { range: 4000, elevation: 1037, timeOfFlight: 39.9, dispersion: "13m" },
                { range: 4100, elevation: 1012, timeOfFlight: 39.3, dispersion: "13m" },
                { range: 4200, elevation: 983, timeOfFlight: 38.6, dispersion: "15m" },
                { range: 4300, elevation: 953, timeOfFlight: 37.9, dispersion: "18m" },
                { range: 4400, elevation: 916, timeOfFlight: 36.9, dispersion: "20m" },
                { range: 4500, elevation: 870, timeOfFlight: 35.6, dispersion: "29m" },
                { range: 4600, elevation: 801, timeOfFlight: 33.6, dispersion: "0m" }
            ],
            // Charge 4 - MOD Adult Mortars (4 Rings) - อัพเดทตามข้อมูลล่าสุด
            4: [
                { range: 900, elevation: 1522, timeOfFlight: 53.7, dispersion: "5m" },
                { range: 1000, elevation: 1513, timeOfFlight: 53.7, dispersion: "5m" },
                { range: 1100, elevation: 1504, timeOfFlight: 53.6, dispersion: "5m" },
                { range: 1200, elevation: 1495, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1300, elevation: 1486, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1400, elevation: 1477, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1500, elevation: 1468, timeOfFlight: 53.4, dispersion: "5m" },
                { range: 1600, elevation: 1458, timeOfFlight: 53.4, dispersion: "4m" },
                { range: 1700, elevation: 1449, timeOfFlight: 53.3, dispersion: "4m" },
                { range: 1800, elevation: 1440, timeOfFlight: 53.2, dispersion: "5m" },
                { range: 1900, elevation: 1430, timeOfFlight: 53.1, dispersion: "4m" },
                { range: 2000, elevation: 1421, timeOfFlight: 53.1, dispersion: "5m" },
                { range: 2100, elevation: 1411, timeOfFlight: 53.0, dispersion: "4m" },
                { range: 2200, elevation: 1402, timeOfFlight: 52.9, dispersion: "5m" },
                { range: 2300, elevation: 1392, timeOfFlight: 52.8, dispersion: "5m" },
                { range: 2400, elevation: 1382, timeOfFlight: 52.7, dispersion: "5m" },
                { range: 2500, elevation: 1372, timeOfFlight: 52.6, dispersion: "5m" },
                { range: 2600, elevation: 1362, timeOfFlight: 52.4, dispersion: "5m" },
                { range: 2700, elevation: 1352, timeOfFlight: 52.3, dispersion: "5m" },
                { range: 2800, elevation: 1341, timeOfFlight: 52.2, dispersion: "5m" },
                { range: 2900, elevation: 1331, timeOfFlight: 52.0, dispersion: "5m" },
                { range: 3000, elevation: 1320, timeOfFlight: 51.9, dispersion: "5m" },
                { range: 3100, elevation: 1310, timeOfFlight: 51.7, dispersion: "5m" },
                { range: 3200, elevation: 1299, timeOfFlight: 51.6, dispersion: "6m" },
                { range: 3300, elevation: 1288, timeOfFlight: 51.4, dispersion: "6m" },
                { range: 3400, elevation: 1276, timeOfFlight: 51.2, dispersion: "6m" },
                { range: 3500, elevation: 1265, timeOfFlight: 51.1, dispersion: "5m" },
                { range: 3600, elevation: 1253, timeOfFlight: 50.9, dispersion: "6m" },
                { range: 3700, elevation: 1241, timeOfFlight: 50.7, dispersion: "6m" },
                { range: 3800, elevation: 1229, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 3900, elevation: 1217, timeOfFlight: 50.2, dispersion: "7m" },
                { range: 4000, elevation: 1204, timeOfFlight: 50.0, dispersion: "6m" },
                { range: 4100, elevation: 1191, timeOfFlight: 49.7, dispersion: "7m" },
                { range: 4200, elevation: 1178, timeOfFlight: 49.5, dispersion: "7m" },
                { range: 4300, elevation: 1164, timeOfFlight: 49.2, dispersion: "7m" },
                { range: 4400, elevation: 1150, timeOfFlight: 48.9, dispersion: "7m" },
                { range: 4500, elevation: 1136, timeOfFlight: 48.6, dispersion: "7m" },
                { range: 4600, elevation: 1121, timeOfFlight: 48.2, dispersion: "8m" },
                { range: 4700, elevation: 1105, timeOfFlight: 47.9, dispersion: "8m" },
                { range: 4800, elevation: 1089, timeOfFlight: 47.5, dispersion: "8m" },
                { range: 4900, elevation: 1072, timeOfFlight: 47.1, dispersion: "8m" },
                { range: 5000, elevation: 1055, timeOfFlight: 46.7, dispersion: "9m" },
                { range: 5100, elevation: 1036, timeOfFlight: 46.2, dispersion: "9m" },
                { range: 5200, elevation: 1017, timeOfFlight: 45.7, dispersion: "10m" },
                { range: 5300, elevation: 996, timeOfFlight: 45.1, dispersion: "11m" },
                { range: 5400, elevation: 974, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 5500, elevation: 950, timeOfFlight: 43.8, dispersion: "13m" },
                { range: 5600, elevation: 923, timeOfFlight: 43.0, dispersion: "15m" },
                { range: 5700, elevation: 892, timeOfFlight: 42.1, dispersion: "17m" },
                { range: 5800, elevation: 854, timeOfFlight: 40.9, dispersion: "25m" },
                { range: 5900, elevation: 802, timeOfFlight: 39.1, dispersion: "0m" }
            ]
        },
        // M819 smoke shell data
        M819: {
            1: [
                { range: 300, elevation: 1498, timeOfFlight: 25.6, dispersion: "18m" },
                { range: 350, elevation: 1480, timeOfFlight: 25.6, dispersion: "17m" },
                { range: 400, elevation: 1463, timeOfFlight: 25.5, dispersion: "18m" },
                { range: 450, elevation: 1445, timeOfFlight: 25.5, dispersion: "18m" },
                { range: 500, elevation: 1427, timeOfFlight: 25.4, dispersion: "18m" },
                { range: 550, elevation: 1409, timeOfFlight: 25.3, dispersion: "19m" },
                { range: 600, elevation: 1390, timeOfFlight: 25.2, dispersion: "19m" },
                { range: 650, elevation: 1371, timeOfFlight: 25.1, dispersion: "19m" },
                { range: 700, elevation: 1352, timeOfFlight: 25.0, dispersion: "20m" },
                { range: 750, elevation: 1332, timeOfFlight: 24.9, dispersion: "20m" },
                { range: 800, elevation: 1312, timeOfFlight: 24.7, dispersion: "21m" },
                { range: 850, elevation: 1291, timeOfFlight: 24.6, dispersion: "22m" },
                { range: 900, elevation: 1269, timeOfFlight: 24.4, dispersion: "22m" },
                { range: 950, elevation: 1247, timeOfFlight: 24.3, dispersion: "23m" },
                { range: 1000, elevation: 1224, timeOfFlight: 24.0, dispersion: "24m" },
                { range: 1050, elevation: 1200, timeOfFlight: 23.8, dispersion: "26m" },
                { range: 1100, elevation: 1174, timeOfFlight: 23.6, dispersion: "36m" },
                { range: 1150, elevation: 1148, timeOfFlight: 23.3, dispersion: "29m" },
                { range: 1200, elevation: 1119, timeOfFlight: 23.0, dispersion: "30m" },
                { range: 1250, elevation: 1089, timeOfFlight: 22.6, dispersion: "34m" },
                { range: 1300, elevation: 1055, timeOfFlight: 22.2, dispersion: "38m" },
                { range: 1350, elevation: 1017, timeOfFlight: 21.7, dispersion: "45m" },
                { range: 1400, elevation: 972, timeOfFlight: 21.1, dispersion: "56m" },
                { range: 1450, elevation: 916, timeOfFlight: 20.3, dispersion: "105m" },
                { range: 1500, elevation: 811, timeOfFlight: 18.6, dispersion: "0m" }
            ],
            // Charge 2 - MOD Adult Mortars (2 Rings) - Average Dispersion: 33m
            2: [
                { range: 400, elevation: 1527, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 500, elevation: 1509, timeOfFlight: 36.3, dispersion: "10m" },
                { range: 600, elevation: 1490, timeOfFlight: 36.2, dispersion: "10m" },
                { range: 700, elevation: 1471, timeOfFlight: 36.1, dispersion: "10m" },
                { range: 800, elevation: 1452, timeOfFlight: 36.0, dispersion: "10m" },
                { range: 900, elevation: 1432, timeOfFlight: 35.9, dispersion: "10m" },
                { range: 1000, elevation: 1412, timeOfFlight: 35.8, dispersion: "10m" },
                { range: 1100, elevation: 1392, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1200, elevation: 1372, timeOfFlight: 35.5, dispersion: "11m" },
                { range: 1300, elevation: 1351, timeOfFlight: 35.4, dispersion: "11m" },
                { range: 1400, elevation: 1328, timeOfFlight: 35.2, dispersion: "11m" },
                { range: 1500, elevation: 1306, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1600, elevation: 1283, timeOfFlight: 34.7, dispersion: "12m" },
                { range: 1700, elevation: 1259, timeOfFlight: 34.4, dispersion: "12m" },
                { range: 1800, elevation: 1235, timeOfFlight: 34.2, dispersion: "13m" },
                { range: 1900, elevation: 1209, timeOfFlight: 33.8, dispersion: "13m" },
                { range: 2000, elevation: 1181, timeOfFlight: 33.5, dispersion: "14m" },
                { range: 2100, elevation: 1153, timeOfFlight: 33.1, dispersion: "15m" },
                { range: 2200, elevation: 1122, timeOfFlight: 32.6, dispersion: "16m" },
                { range: 2300, elevation: 1089, timeOfFlight: 32.1, dispersion: "18m" },
                { range: 2400, elevation: 1053, timeOfFlight: 31.5, dispersion: "20m" },
                { range: 2500, elevation: 1012, timeOfFlight: 30.7, dispersion: "22m" },
                { range: 2600, elevation: 965, timeOfFlight: 29.8, dispersion: "27m" },
                { range: 2700, elevation: 906, timeOfFlight: 28.7, dispersion: "39m" },
                { range: 2800, elevation: 810, timeOfFlight: 26.5, dispersion: "0m" }
            ],
            // M819 Charge 3 - MOD Adult Mortars (3 Rings) - Average Dispersion: 46m
            // แก้คอลัมน์เวลาบินช่วง 1200-3200 m: ค่าเดิมถูกเลื่อนผิดแถว (ช่วง 700-1100 และ 3300-3800 ถูกอยู่แล้ว)
            3: [
                { range: 500, elevation: 1534, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 600, elevation: 1521, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 700, elevation: 1507, timeOfFlight: 44.0, dispersion: "6m" },
                { range: 800, elevation: 1494, timeOfFlight: 44.0, dispersion: "7m" },
                { range: 900, elevation: 1480, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1000, elevation: 1466, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1100, elevation: 1452, timeOfFlight: 43.8, dispersion: "7m" },
                { range: 1200, elevation: 1438, timeOfFlight: 43.7, dispersion: "7m" },
                { range: 1300, elevation: 1424, timeOfFlight: 43.6, dispersion: "7m" },
                { range: 1400, elevation: 1409, timeOfFlight: 43.5, dispersion: "7m" },
                { range: 1500, elevation: 1395, timeOfFlight: 43.4, dispersion: "8m" },
                { range: 1600, elevation: 1380, timeOfFlight: 43.2, dispersion: "8m" },
                { range: 1700, elevation: 1364, timeOfFlight: 43.1, dispersion: "7m" },
                { range: 1800, elevation: 1349, timeOfFlight: 42.9, dispersion: "8m" },
                { range: 1900, elevation: 1333, timeOfFlight: 42.8, dispersion: "8m" },
                { range: 2000, elevation: 1317, timeOfFlight: 42.6, dispersion: "8m" },
                { range: 2100, elevation: 1300, timeOfFlight: 42.4, dispersion: "8m" },
                { range: 2200, elevation: 1284, timeOfFlight: 42.2, dispersion: "9m" },
                { range: 2300, elevation: 1266, timeOfFlight: 42, dispersion: "9m" },
                { range: 2400, elevation: 1249, timeOfFlight: 41.7, dispersion: "10m" },
                { range: 2500, elevation: 1230, timeOfFlight: 41.4, dispersion: "9m" },
                { range: 2600, elevation: 1211, timeOfFlight: 41.2, dispersion: "9m" },
                { range: 2700, elevation: 1192, timeOfFlight: 40.9, dispersion: "10m" },
                { range: 2800, elevation: 1172, timeOfFlight: 40.5, dispersion: "11m" },
                { range: 2900, elevation: 1150, timeOfFlight: 40.2, dispersion: "11m" },
                { range: 3000, elevation: 1128, timeOfFlight: 39.8, dispersion: "11m" },
                { range: 3100, elevation: 1105, timeOfFlight: 39.3, dispersion: "12m" },
                { range: 3200, elevation: 1080, timeOfFlight: 38.9, dispersion: "13m" },
                { range: 3300, elevation: 1054, timeOfFlight: 38.3, dispersion: "14m" },
                { range: 3400, elevation: 1026, timeOfFlight: 37.7, dispersion: "15m" },
                { range: 3500, elevation: 996, timeOfFlight: 37.1, dispersion: "18m" },
                { range: 3600, elevation: 961, timeOfFlight: 36.3, dispersion: "19m" },
                { range: 3700, elevation: 921, timeOfFlight: 35.3, dispersion: "21m" },
                { range: 3800, elevation: 873, timeOfFlight: 34.1, dispersion: "28m" },
                { range: 3900, elevation: 806, timeOfFlight: 32.3, dispersion: "0m" }
            ],
            // M819 Charge 4 - MOD Adult Mortars (4 Rings) - Average Dispersion: 57m
            4: [
                { range: 800, elevation: 1515, timeOfFlight: 50.7, dispersion: "6m" },
                { range: 900, elevation: 1504, timeOfFlight: 50.6, dispersion: "5m" },
                { range: 1000, elevation: 1493, timeOfFlight: 50.6, dispersion: "5m" },
                { range: 1100, elevation: 1482, timeOfFlight: 50.5, dispersion: "5m" },
                { range: 1200, elevation: 1471, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 1300, elevation: 1460, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 1400, elevation: 1448, timeOfFlight: 50.3, dispersion: "5m" },
                { range: 1500, elevation: 1437, timeOfFlight: 50.2, dispersion: "6m" },
                { range: 1600, elevation: 1425, timeOfFlight: 50.1, dispersion: "5m" },
                { range: 1700, elevation: 1414, timeOfFlight: 50.0, dispersion: "6m" },
                { range: 1800, elevation: 1402, timeOfFlight: 49.9, dispersion: "6m" },
                { range: 1900, elevation: 1390, timeOfFlight: 49.8, dispersion: "6m" },
                { range: 2000, elevation: 1378, timeOfFlight: 49.7, dispersion: "6m" },
                { range: 2100, elevation: 1366, timeOfFlight: 49.5, dispersion: "7m" },
                { range: 2200, elevation: 1353, timeOfFlight: 49.4, dispersion: "6m" },
                { range: 2300, elevation: 1340, timeOfFlight: 49.2, dispersion: "6m" },
                { range: 2400, elevation: 1328, timeOfFlight: 49.1, dispersion: "7m" },
                { range: 2500, elevation: 1314, timeOfFlight: 48.9, dispersion: "6m" },
                { range: 2600, elevation: 1301, timeOfFlight: 48.7, dispersion: "7m" },
                { range: 2700, elevation: 1288, timeOfFlight: 48.5, dispersion: "7m" },
                { range: 2800, elevation: 1274, timeOfFlight: 48.3, dispersion: "7m" },
                { range: 2900, elevation: 1260, timeOfFlight: 48.1, dispersion: "7m" },
                { range: 3000, elevation: 1245, timeOfFlight: 47.9, dispersion: "7m" },
                { range: 3100, elevation: 1230, timeOfFlight: 47.7, dispersion: "7m" },
                { range: 3200, elevation: 1215, timeOfFlight: 47.4, dispersion: "7m" },
                { range: 3300, elevation: 1200, timeOfFlight: 47.1, dispersion: "8m" },
                { range: 3400, elevation: 1184, timeOfFlight: 46.8, dispersion: "8m" },
                { range: 3500, elevation: 1167, timeOfFlight: 46.5, dispersion: "8m" },
                { range: 3600, elevation: 1151, timeOfFlight: 46.2, dispersion: "9m" },
                { range: 3700, elevation: 1133, timeOfFlight: 45.8, dispersion: "9m" },
                { range: 3800, elevation: 1115, timeOfFlight: 45.5, dispersion: "10m" },
                { range: 3900, elevation: 1096, timeOfFlight: 45.1, dispersion: "10m" },
                { range: 4000, elevation: 1076, timeOfFlight: 44.6, dispersion: "10m" },
                { range: 4100, elevation: 1055, timeOfFlight: 44.1, dispersion: "10m" },
                { range: 4200, elevation: 1033, timeOfFlight: 43.6, dispersion: "11m" },
                { range: 4300, elevation: 1010, timeOfFlight: 43.1, dispersion: "12m" },
                { range: 4400, elevation: 985, timeOfFlight: 42.4, dispersion: "13m" },
                { range: 4500, elevation: 958, timeOfFlight: 41.7, dispersion: "14m" },
                { range: 4600, elevation: 929, timeOfFlight: 40.9, dispersion: "16m" },
                { range: 4700, elevation: 895, timeOfFlight: 40.0, dispersion: "20m" },
                { range: 4800, elevation: 856, timeOfFlight: 38.8, dispersion: "25m" },
                { range: 4900, elevation: 805, timeOfFlight: 37.3, dispersion: "0m" }
            ]
        },
        M853A1: {
            // 1 Ring - M853A1 illumination round (1 Ring)
            1: [
                { range: 300, elevation: 1493, timeOfFlight: 26.1, dispersion: "18m" },
                { range: 350, elevation: 1475, timeOfFlight: 26.0, dispersion: "18m" },
                { range: 400, elevation: 1457, timeOfFlight: 26.0, dispersion: "19m" },
                { range: 450, elevation: 1438, timeOfFlight: 25.9, dispersion: "19m" },
                { range: 500, elevation: 1419, timeOfFlight: 25.8, dispersion: "19m" },
                { range: 550, elevation: 1400, timeOfFlight: 25.7, dispersion: "21m" },
                { range: 600, elevation: 1379, timeOfFlight: 25.6, dispersion: "20m" },
                { range: 650, elevation: 1359, timeOfFlight: 25.5, dispersion: "21m" },
                { range: 700, elevation: 1338, timeOfFlight: 25.4, dispersion: "21m" },
                { range: 750, elevation: 1317, timeOfFlight: 25.2, dispersion: "22m" },
                { range: 800, elevation: 1295, timeOfFlight: 25.1, dispersion: "23m" },
                { range: 850, elevation: 1272, timeOfFlight: 24.9, dispersion: "23m" },
                { range: 900, elevation: 1249, timeOfFlight: 24.7, dispersion: "25m" },
                { range: 950, elevation: 1224, timeOfFlight: 24.5, dispersion: "25m" },
                { range: 1000, elevation: 1199, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1050, elevation: 1172, timeOfFlight: 24.0, dispersion: "28m" },
                { range: 1100, elevation: 1144, timeOfFlight: 23.7, dispersion: "33m" },
                { range: 1150, elevation: 1114, timeOfFlight: 23.4, dispersion: "35m" },
                { range: 1200, elevation: 1081, timeOfFlight: 23, dispersion: "41m" },
                { range: 1250, elevation: 1046, timeOfFlight: 22.6, dispersion: "47m" },
                { range: 1300, elevation: 1005, timeOfFlight: 22.1, dispersion: "58m" },
                { range: 1350, elevation: 958, timeOfFlight: 21.4, dispersion: "98m" },
                { range: 1400, elevation: 900, timeOfFlight: 20.6, dispersion: "0m" },
                { range: 1450, elevation: 802, timeOfFlight: 19, dispersion: "0m" }
            ],
            // 2 Ring - M853A1 illumination round (2 Rings)
            2: [
                { range: 500, elevation: 1509, timeOfFlight: 39.8, dispersion: "9m" },
                { range: 600, elevation: 1490, timeOfFlight: 39.7, dispersion: "9m" },
                { range: 700, elevation: 1470, timeOfFlight: 39.6, dispersion: "10m" },
                { range: 800, elevation: 1452, timeOfFlight: 39.5, dispersion: "10m" },
                { range: 900, elevation: 1433, timeOfFlight: 39.3, dispersion: "10m" },
                { range: 1000, elevation: 1413, timeOfFlight: 39.3, dispersion: "10m" },
                { range: 1100, elevation: 1393, timeOfFlight: 39.1, dispersion: "11m" },
                { range: 1200, elevation: 1372, timeOfFlight: 39.0, dispersion: "11m" },
                { range: 1300, elevation: 1351, timeOfFlight: 38.8, dispersion: "11m" },
                { range: 1400, elevation: 1329, timeOfFlight: 38.6, dispersion: "11m" },
                { range: 1500, elevation: 1306, timeOfFlight: 38.3, dispersion: "11m" },
                { range: 1600, elevation: 1283, timeOfFlight: 38.1, dispersion: "12m" },
                { range: 1700, elevation: 1259, timeOfFlight: 37.8, dispersion: "12m" },
                { range: 1800, elevation: 1235, timeOfFlight: 37.5, dispersion: "13m" },
                { range: 1900, elevation: 1209, timeOfFlight: 37.2, dispersion: "13m" },
                { range: 2000, elevation: 1182, timeOfFlight: 36.8, dispersion: "14m" },
                { range: 2100, elevation: 1154, timeOfFlight: 36.5, dispersion: "15m" },
                { range: 2200, elevation: 1125, timeOfFlight: 35.9, dispersion: "17m" },
                { range: 2300, elevation: 1093, timeOfFlight: 35.4, dispersion: "18m" },
                { range: 2400, elevation: 1058, timeOfFlight: 34.8, dispersion: "19m" },
                { range: 2500, elevation: 1021, timeOfFlight: 34.1, dispersion: "22m" },
                { range: 2600, elevation: 980, timeOfFlight: 33.3, dispersion: "26m" },
                { range: 2700, elevation: 934, timeOfFlight: 32.3, dispersion: "32m" },
                { range: 2800, elevation: 878, timeOfFlight: 31.1, dispersion: "32m" },
                { range: 2900, elevation: 806, timeOfFlight: 29.4, dispersion: "0m" }
            ],
            // 3 Ring - M853A1 illumination round (3 Rings)
            3: [
                { range: 700, elevation: 1507, timeOfFlight: 50.1, dispersion: "7m" },
                { range: 800, elevation: 1493, timeOfFlight: 50.0, dispersion: "7m" },
                { range: 900, elevation: 1479, timeOfFlight: 50.0, dispersion: "7m" },
                { range: 1000, elevation: 1465, timeOfFlight: 49.9, dispersion: "7m" },
                { range: 1100, elevation: 1451, timeOfFlight: 49.8, dispersion: "7m" },
                { range: 1200, elevation: 1437, timeOfFlight: 49.7, dispersion: "7m" },
                { range: 1300, elevation: 1422, timeOfFlight: 49.6, dispersion: "7m" },
                { range: 1400, elevation: 1408, timeOfFlight: 49.5, dispersion: "8m" },
                { range: 1500, elevation: 1393, timeOfFlight: 49.3, dispersion: "8m" },
                { range: 1600, elevation: 1378, timeOfFlight: 49.2, dispersion: "8m" },
                { range: 1700, elevation: 1362, timeOfFlight: 49.0, dispersion: "7m" },
                { range: 1800, elevation: 1347, timeOfFlight: 48.8, dispersion: "8m" },
                { range: 1900, elevation: 1331, timeOfFlight: 48.7, dispersion: "8m" },
                { range: 2000, elevation: 1315, timeOfFlight: 48.5, dispersion: "9m" },
                { range: 2100, elevation: 1298, timeOfFlight: 48.2, dispersion: "8m" },
                { range: 2200, elevation: 1281, timeOfFlight: 48.0, dispersion: "8m" },
                { range: 2300, elevation: 1264, timeOfFlight: 47.8, dispersion: "9m" },
                { range: 2400, elevation: 1246, timeOfFlight: 47.5, dispersion: "9m" },
                { range: 2500, elevation: 1227, timeOfFlight: 47.2, dispersion: "9m" },
                { range: 2600, elevation: 1210, timeOfFlight: 46.9, dispersion: "10m" },
                { range: 2700, elevation: 1191, timeOfFlight: 46.6, dispersion: "10m" },
                { range: 2800, elevation: 1171, timeOfFlight: 46.2, dispersion: "10m" },
                { range: 2900, elevation: 1153, timeOfFlight: 45.9, dispersion: "11m" },
                { range: 3000, elevation: 1133, timeOfFlight: 45.5, dispersion: "11m" },
                { range: 3100, elevation: 1108, timeOfFlight: 45.0, dispersion: "11m" },
                { range: 3200, elevation: 1086, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 3300, elevation: 1062, timeOfFlight: 44.0, dispersion: "13m" },
                { range: 3400, elevation: 1038, timeOfFlight: 43.5, dispersion: "13m" },
                { range: 3500, elevation: 1012, timeOfFlight: 42.9, dispersion: "14m" },
                { range: 3600, elevation: 984, timeOfFlight: 42.2, dispersion: "14m" },
                { range: 3700, elevation: 955, timeOfFlight: 41.5, dispersion: "16m" },
                { range: 3800, elevation: 923, timeOfFlight: 40.7, dispersion: "17m" },
                { range: 3900, elevation: 888, timeOfFlight: 39.8, dispersion: "18m" },
                { range: 4000, elevation: 850, timeOfFlight: 38.7, dispersion: "23m" },
                { range: 4100, elevation: 804, timeOfFlight: 37.4, dispersion: "0m" }
            ],
            // 4 Ring - M853A1 illumination round (4 Rings)
            4: [
                { range: 3400, elevation: 1162, timeOfFlight: 53.0, dispersion: "9m" },
                { range: 3500, elevation: 1145, timeOfFlight: 52.7, dispersion: "9m" },
                { range: 3600, elevation: 1128, timeOfFlight: 52.3, dispersion: "9m" },
                { range: 3700, elevation: 1110, timeOfFlight: 51.9, dispersion: "9m" },
                { range: 3800, elevation: 1092, timeOfFlight: 51.5, dispersion: "9m" },
                { range: 3900, elevation: 1073, timeOfFlight: 51.0, dispersion: "9m" },
                { range: 4000, elevation: 1054, timeOfFlight: 50.5, dispersion: "10m" },
                { range: 4100, elevation: 1034, timeOfFlight: 50.0, dispersion: "10m" },
                { range: 4200, elevation: 1013, timeOfFlight: 49.5, dispersion: "10m" },
                { range: 4300, elevation: 992, timeOfFlight: 48.9, dispersion: "12m" },
                { range: 4400, elevation: 969, timeOfFlight: 48.3, dispersion: "12m" },
                { range: 4500, elevation: 946, timeOfFlight: 47.6, dispersion: "13m" },
                { range: 4600, elevation: 921, timeOfFlight: 46.9, dispersion: "13m" },
                { range: 4700, elevation: 894, timeOfFlight: 46.1, dispersion: "14m" },
                { range: 4800, elevation: 866, timeOfFlight: 45.2, dispersion: "15m" },
                { range: 4900, elevation: 835, timeOfFlight: 44.2, dispersion: "16m" },
                { range: 5000, elevation: 801, timeOfFlight: 43.1, dispersion: "0m" }
            ]
        },
        "0-832Ay": {
            // 0 Ring - MOD (Dispersion: 13m ตามภาพใหม่)
            0: [
                { range: 50, elevation: 1455, timeOfFlight: 15.0, dispersion: "44m" },
                { range: 100, elevation: 1411, timeOfFlight: 15.0, dispersion: "46m" },
                { range: 150, elevation: 1365, timeOfFlight: 14.9, dispersion: "47m" },
                { range: 200, elevation: 1318, timeOfFlight: 14.8, dispersion: "50m" },
                { range: 250, elevation: 1268, timeOfFlight: 14.6, dispersion: "51m" },
                { range: 300, elevation: 1217, timeOfFlight: 14.4, dispersion: "58m" },
                { range: 350, elevation: 1159, timeOfFlight: 14.1, dispersion: "64m" },
                { range: 400, elevation: 1095, timeOfFlight: 13.7, dispersion: "72m" },
                { range: 450, elevation: 1023, timeOfFlight: 13.2, dispersion: "101m" },
                { range: 500, elevation: 922, timeOfFlight: 12.4, dispersion: "0m" }
            ],
            // 1 Ring - MOD (Dispersion: 13m ตามภาพที่ 2)
            1: [
                { range: 200, elevation: 1435, timeOfFlight: 25.5, dispersion: "16m" },
                { range: 300, elevation: 1403, timeOfFlight: 25.4, dispersion: "17m" },
                { range: 400, elevation: 1369, timeOfFlight: 25.3, dispersion: "17m" },
                { range: 500, elevation: 1335, timeOfFlight: 25.2, dispersion: "18m" },
                { range: 600, elevation: 1299, timeOfFlight: 25, dispersion: "18m" },
                { range: 700, elevation: 1263, timeOfFlight: 24.8, dispersion: "19m" },
                { range: 800, elevation: 1224, timeOfFlight: 24.5, dispersion: "20m" },
                { range: 900, elevation: 1183, timeOfFlight: 24.2, dispersion: "21m" },
                { range: 1000, elevation: 1139, timeOfFlight: 23.8, dispersion: "23m" },
                { range: 1100, elevation: 1091, timeOfFlight: 23.3, dispersion: "26m" },
                { range: 1200, elevation: 1037, timeOfFlight: 22.7, dispersion: "31m" },
                { range: 1300, elevation: 973, timeOfFlight: 21.9, dispersion: "38m" },
                { range: 1400, elevation: 883, timeOfFlight: 20.5, dispersion: "68m" }
            ],
            // 2 Ring - MOD (Dispersion: 33m ตามภาพที่ 2)
            2: [
                { range: 300, elevation: 1439, timeOfFlight: 32.9, dispersion: "11m" },
                { range: 400, elevation: 1418, timeOfFlight: 32.8, dispersion: "11m" },
                { range: 500, elevation: 1397, timeOfFlight: 32.7, dispersion: "11m" },
                { range: 600, elevation: 1375, timeOfFlight: 32.6, dispersion: "10m" },
                { range: 700, elevation: 1354, timeOfFlight: 32.5, dispersion: "11m" },
                { range: 800, elevation: 1332, timeOfFlight: 32.4, dispersion: "11m" },
                { range: 900, elevation: 1309, timeOfFlight: 32.3, dispersion: "11m" },
                { range: 1000, elevation: 1286, timeOfFlight: 32.1, dispersion: "12m" },
                { range: 1100, elevation: 1263, timeOfFlight: 31.9, dispersion: "13m" },
                { range: 1200, elevation: 1238, timeOfFlight: 31.7, dispersion: "13m" },
                { range: 1300, elevation: 1213, timeOfFlight: 31.5, dispersion: "14m" },
                { range: 1400, elevation: 1186, timeOfFlight: 31.2, dispersion: "13m" },
                { range: 1500, elevation: 1158, timeOfFlight: 30.9, dispersion: "14m" },
                { range: 1600, elevation: 1130, timeOfFlight: 30.5, dispersion: "16m" },
                { range: 1700, elevation: 1098, timeOfFlight: 30.1, dispersion: "16m" },
                { range: 1800, elevation: 1065, timeOfFlight: 29.7, dispersion: "17m" },
                { range: 1900, elevation: 1030, timeOfFlight: 29.1, dispersion: "20m" },
                { range: 2000, elevation: 989, timeOfFlight: 28.5, dispersion: "22m" },
                { range: 2100, elevation: 943, timeOfFlight: 27.7, dispersion: "27m" },
                { range: 2200, elevation: 887, timeOfFlight: 26.6, dispersion: "36m" },
                { range: 2300, elevation: 805, timeOfFlight: 24.9, dispersion: "0m" }
            ],
            // 3 Ring - MOD (Dispersion: 44m ตามภาพที่ 2)
            3: [
                { range: 400, elevation: 1438, timeOfFlight: 38.7, dispersion: "8m" },
                { range: 500, elevation: 1422, timeOfFlight: 38.7, dispersion: "7m" },
                { range: 600, elevation: 1407, timeOfFlight: 38.6, dispersion: "8m" },
                { range: 700, elevation: 1391, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 800, elevation: 1374, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 900, elevation: 1358, timeOfFlight: 38.4, dispersion: "8m" },
                { range: 1000, elevation: 1342, timeOfFlight: 38.3, dispersion: "9m" },
                { range: 1100, elevation: 1325, timeOfFlight: 38.1, dispersion: "9m" },
                { range: 1200, elevation: 1307, timeOfFlight: 38, dispersion: "8m" },
                { range: 1300, elevation: 1290, timeOfFlight: 37.9, dispersion: "8m" },
                { range: 1400, elevation: 1272, timeOfFlight: 37.7, dispersion: "9m" },
                { range: 1500, elevation: 1254, timeOfFlight: 37.5, dispersion: "10m" },
                { range: 1600, elevation: 1235, timeOfFlight: 37.3, dispersion: "10m" },
                { range: 1700, elevation: 1216, timeOfFlight: 37.1, dispersion: "10m" },
                { range: 1800, elevation: 1196, timeOfFlight: 36.9, dispersion: "11m" },
                { range: 1900, elevation: 1175, timeOfFlight: 36.6, dispersion: "11m" },
                { range: 2000, elevation: 1153, timeOfFlight: 36.3, dispersion: "11m" },
                { range: 2100, elevation: 1131, timeOfFlight: 36, dispersion: "11m" },
                { range: 2200, elevation: 1108, timeOfFlight: 35.7, dispersion: "12m" },
                { range: 2300, elevation: 1084, timeOfFlight: 35.3, dispersion: "13m" },
                { range: 2400, elevation: 1058, timeOfFlight: 34.8, dispersion: "14m" },
                { range: 2500, elevation: 1031, timeOfFlight: 34.4, dispersion: "15m" },
                { range: 2600, elevation: 1001, timeOfFlight: 33.8, dispersion: "15m" },
                { range: 2700, elevation: 968, timeOfFlight: 33.2, dispersion: "17m" },
                { range: 2800, elevation: 933, timeOfFlight: 32.4, dispersion: "21m" },
                { range: 2900, elevation: 891, timeOfFlight: 31.5, dispersion: "26m" },
                { range: 3000, elevation: 839, timeOfFlight: 30.3, dispersion: "33m" },
                { range: 3100, elevation: 758, timeOfFlight: 28.3, dispersion: "0m" }
            ],
            // 4 Ring - MOD (Dispersion: 55m ตามภาพที่ 2)
            4: [
                { range: 600, elevation: 1426, timeOfFlight: 44.4, dispersion: "6m" },
                { range: 700, elevation: 1413, timeOfFlight: 44.4, dispersion: "6m" },
                { range: 800, elevation: 1401, timeOfFlight: 44.3, dispersion: "7m" },
                { range: 900, elevation: 1388, timeOfFlight: 44.2, dispersion: "7m" },
                { range: 1000, elevation: 1375, timeOfFlight: 44.2, dispersion: "7m" },
                { range: 1100, elevation: 1362, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 1200, elevation: 1348, timeOfFlight: 44, dispersion: "6m" },
                { range: 1300, elevation: 1335, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1400, elevation: 1321, timeOfFlight: 43.8, dispersion: "6m" },
                { range: 1500, elevation: 1308, timeOfFlight: 43.7, dispersion: "7m" },
                { range: 1600, elevation: 1294, timeOfFlight: 43.5, dispersion: "7m" },
                { range: 1700, elevation: 1279, timeOfFlight: 43.4, dispersion: "7m" },
                { range: 1800, elevation: 1265, timeOfFlight: 43.2, dispersion: "8m" },
                { range: 1900, elevation: 1250, timeOfFlight: 43.1, dispersion: "7m" },
                { range: 2000, elevation: 1235, timeOfFlight: 42.9, dispersion: "8m" },
                { range: 2100, elevation: 1220, timeOfFlight: 42.7, dispersion: "8m" },
                { range: 2200, elevation: 1204, timeOfFlight: 42.5, dispersion: "8m" },
                { range: 2300, elevation: 1188, timeOfFlight: 42.3, dispersion: "9m" },
                { range: 2400, elevation: 1171, timeOfFlight: 42, dispersion: "9m" },
                { range: 2500, elevation: 1154, timeOfFlight: 41.8, dispersion: "9m" },
                { range: 2600, elevation: 1136, timeOfFlight: 41.5, dispersion: "9m" },
                { range: 2700, elevation: 1118, timeOfFlight: 41.2, dispersion: "9m" },
                { range: 2800, elevation: 1099, timeOfFlight: 40.8, dispersion: "10m" },
                { range: 2900, elevation: 1077, timeOfFlight: 40.5, dispersion: "10m" },
                // แก้ค่าพิมพ์ผิด: เดิมเป็น 50.1 ซึ่งขัดกับแถวข้างเคียง (40.5 / 39.7) และการจำลองวิถี (40.1)
                { range: 3000, elevation: 1059, timeOfFlight: 40.1, dispersion: "11m" },
                { range: 3100, elevation: 1037, timeOfFlight: 39.7, dispersion: "11m" },
                { range: 3200, elevation: 1014, timeOfFlight: 39.2, dispersion: "12m" },
                { range: 3300, elevation: 990, timeOfFlight: 38.7, dispersion: "13m" },
                { range: 3400, elevation: 963, timeOfFlight: 38, dispersion: "13m" },
                { range: 3500, elevation: 936, timeOfFlight: 37.4, dispersion: "16m" },
                { range: 3600, elevation: 904, timeOfFlight: 36.6, dispersion: "17m" },
                { range: 3700, elevation: 868, timeOfFlight: 35.7, dispersion: "20m" },
                { range: 3800, elevation: 824, timeOfFlight: 34.5, dispersion: "24m" },
                { range: 3900, elevation: 766, timeOfFlight: 32.9, dispersion: "0m" }
            ]
        },
        "A-832AY": {
            // 0 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 1)
            0: [
                { range: 50, elevation: 1450, timeOfFlight: 14.1, dispersion: "51m" },
                { range: 100, elevation: 1399, timeOfFlight: 14.0, dispersion: "52m" },
                { range: 150, elevation: 1347, timeOfFlight: 13.9, dispersion: "55m" },
                { range: 200, elevation: 1292, timeOfFlight: 13.8, dispersion: "57m" },
                { range: 250, elevation: 1235, timeOfFlight: 13.6, dispersion: "63m" },
                { range: 300, elevation: 1172, timeOfFlight: 13.3, dispersion: "70m" },
                { range: 350, elevation: 1102, timeOfFlight: 12.9, dispersion: "82m" },
                { range: 400, elevation: 1020, timeOfFlight: 12.4, dispersion: "122m" },
                { range: 450, elevation: 898, timeOfFlight: 11.4, dispersion: "0m" }
            ],
            // 1 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 2)
            1: [
                { range: 200, elevation: 1429, timeOfFlight: 24.3, dispersion: "18m" },
                { range: 300, elevation: 1393, timeOfFlight: 24.2, dispersion: "18m" },
                { range: 400, elevation: 1357, timeOfFlight: 24.1, dispersion: "19m" },
                { range: 500, elevation: 1319, timeOfFlight: 23.9, dispersion: "20m" },
                { range: 600, elevation: 1279, timeOfFlight: 23.7, dispersion: "20m" },
                { range: 700, elevation: 1238, timeOfFlight: 23.4, dispersion: "21m" },
                { range: 800, elevation: 1194, timeOfFlight: 23.1, dispersion: "22m" },
                { range: 900, elevation: 1147, timeOfFlight: 22.7, dispersion: "24m" },
                { range: 1000, elevation: 1096, timeOfFlight: 22.2, dispersion: "28m" },
                { range: 1100, elevation: 1037, timeOfFlight: 21.6, dispersion: "34m" },
                { range: 1200, elevation: 966, timeOfFlight: 20.7, dispersion: "46m" },
                { range: 1300, elevation: 862, timeOfFlight: 19.2, dispersion: "106m" },
                { range: 1300, elevation: 862, timeOfFlight: 19.2, dispersion: "0m" }
            ],
            // 2 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 3)
            2: [
                { range: 300, elevation: 1433, timeOfFlight: 31.1, dispersion: "12m" },
                { range: 400, elevation: 1410, timeOfFlight: 31.1, dispersion: "11m" },
                { range: 500, elevation: 1387, timeOfFlight: 31.0, dispersion: "12m" },
                { range: 600, elevation: 1364, timeOfFlight: 30.9, dispersion: "12m" },
                { range: 700, elevation: 1340, timeOfFlight: 30.8, dispersion: "12m" },
                { range: 800, elevation: 1316, timeOfFlight: 30.6, dispersion: "13m" },
                { range: 900, elevation: 1290, timeOfFlight: 30.5, dispersion: "12m" },
                { range: 1000, elevation: 1265, timeOfFlight: 30.3, dispersion: "14m" },
                { range: 1100, elevation: 1238, timeOfFlight: 30.1, dispersion: "14m" },
                { range: 1200, elevation: 1210, timeOfFlight: 29.8, dispersion: "14m" },
                { range: 1300, elevation: 1181, timeOfFlight: 29.5, dispersion: "14m" },
                { range: 1400, elevation: 1151, timeOfFlight: 29.2, dispersion: "16m" },
                { range: 1500, elevation: 1119, timeOfFlight: 28.8, dispersion: "17m" },
                { range: 1600, elevation: 1084, timeOfFlight: 28.4, dispersion: "18m" },
                { range: 1700, elevation: 1047, timeOfFlight: 27.8, dispersion: "20m" },
                { range: 1800, elevation: 1005, timeOfFlight: 27.2, dispersion: "23m" },
                { range: 1900, elevation: 956, timeOfFlight: 26.4, dispersion: "27m" },
                { range: 2000, elevation: 898, timeOfFlight: 25.4, dispersion: "38m" },
                { range: 2100, elevation: 810, timeOfFlight: 23.7, dispersion: "0m" }
            ],
            // 3 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 4) 
            3: [
                { range: 400, elevation: 1432, timeOfFlight: 36.5, dispersion: "8m" },
                { range: 500, elevation: 1415, timeOfFlight: 36.5, dispersion: "8m" },
                { range: 600, elevation: 1398, timeOfFlight: 36.4, dispersion: "9m" },
                { range: 700, elevation: 1380, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 800, elevation: 1362, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 900, elevation: 1344, timeOfFlight: 36.1, dispersion: "9m" },
                { range: 1000, elevation: 1326, timeOfFlight: 36.0, dispersion: "9m" },
                { range: 1100, elevation: 1307, timeOfFlight: 35.9, dispersion: "9m" },
                { range: 1200, elevation: 1288, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1300, elevation: 1269, timeOfFlight: 35.6, dispersion: "11m" },
                { range: 1400, elevation: 1248, timeOfFlight: 35.4, dispersion: "10m" },
                { range: 1500, elevation: 1228, timeOfFlight: 35.2, dispersion: "11m" },
                { range: 1600, elevation: 1206, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1700, elevation: 1184, timeOfFlight: 34.7, dispersion: "11m" },
                { range: 1800, elevation: 1161, timeOfFlight: 34.4, dispersion: "12m" },
                { range: 1900, elevation: 1138, timeOfFlight: 34.1, dispersion: "12m" },
                { range: 2000, elevation: 1112, timeOfFlight: 33.7, dispersion: "13m" },
                { range: 2100, elevation: 1086, timeOfFlight: 33.3, dispersion: "13m" },
                { range: 2200, elevation: 1058, timeOfFlight: 32.9, dispersion: "15m" },
                { range: 2300, elevation: 1028, timeOfFlight: 32.4, dispersion: "16m" },
                { range: 2400, elevation: 995, timeOfFlight: 31.8, dispersion: "18m" },
                { range: 2500, elevation: 958, timeOfFlight: 31.1, dispersion: "19m" },
                { range: 2600, elevation: 916, timeOfFlight: 30.2, dispersion: "23m" },
                { range: 2700, elevation: 865, timeOfFlight: 29.1, dispersion: "32m" },
                { range: 2800, elevation: 792, timeOfFlight: 27.5, dispersion: "0m" }
            ]
        },
        "C-832C": {
            // Ring 1 - MOD C-832C Illumination (ตามภาพ Ring 1 - Dispersion: 15m)
            1: [
                { range: 150, elevation: 1429, timeOfFlight: 21.9, dispersion: "24m" },
                { range: 200, elevation: 1405, timeOfFlight: 21.8, dispersion: "24m" },
                { range: 250, elevation: 1381, timeOfFlight: 21.8, dispersion: "25m" },
                { range: 300, elevation: 1356, timeOfFlight: 21.7, dispersion: "25m" },
                { range: 350, elevation: 1331, timeOfFlight: 21.6, dispersion: "26m" },
                { range: 400, elevation: 1305, timeOfFlight: 21.5, dispersion: "27m" },
                { range: 450, elevation: 1278, timeOfFlight: 21.4, dispersion: "28m" },
                { range: 500, elevation: 1250, timeOfFlight: 21.2, dispersion: "28m" },
                { range: 550, elevation: 1222, timeOfFlight: 21.0, dispersion: "31m" },
                { range: 600, elevation: 1191, timeOfFlight: 20.8, dispersion: "32m" },
                { range: 650, elevation: 1159, timeOfFlight: 20.6, dispersion: "33m" },
                { range: 700, elevation: 1126, timeOfFlight: 20.3, dispersion: "36m" },
                { range: 750, elevation: 1090, timeOfFlight: 20.0, dispersion: "40m" },
                { range: 800, elevation: 1050, timeOfFlight: 19.6, dispersion: "45m" },
                { range: 850, elevation: 1005, timeOfFlight: 19.1, dispersion: "50m" },
                { range: 900, elevation: 955, timeOfFlight: 18.6, dispersion: "63m" },
                { range: 950, elevation: 892, timeOfFlight: 17.8, dispersion: "99m" },
                { range: 1000, elevation: 800, timeOfFlight: 16.6, dispersion: "0m" }
            ],
            // Ring 2 - MOD C-832C Illumination (ตามภาพ Ring 2 - Dispersion: 28m)
            2: [
                { range: 300, elevation: 1424, timeOfFlight: 32.2, dispersion: "13m" },
                { range: 400, elevation: 1398, timeOfFlight: 32.1, dispersion: "13m" },
                { range: 500, elevation: 1371, timeOfFlight: 32.0, dispersion: "13m" },
                { range: 600, elevation: 1344, timeOfFlight: 31.9, dispersion: "14m" },
                { range: 700, elevation: 1316, timeOfFlight: 31.7, dispersion: "14m" },
                { range: 800, elevation: 1287, timeOfFlight: 31.5, dispersion: "14m" },
                { range: 900, elevation: 1257, timeOfFlight: 31.3, dispersion: "15m" },
                { range: 1000, elevation: 1226, timeOfFlight: 31.0, dispersion: "16m" },
                { range: 1100, elevation: 1194, timeOfFlight: 30.7, dispersion: "17m" },
                { range: 1200, elevation: 1159, timeOfFlight: 30.4, dispersion: "18m" },
                { range: 1300, elevation: 1123, timeOfFlight: 30.0, dispersion: "19m" },
                { range: 1400, elevation: 1084, timeOfFlight: 29.5, dispersion: "21m" },
                { range: 1500, elevation: 1042, timeOfFlight: 28.9, dispersion: "23m" },
                { range: 1600, elevation: 995, timeOfFlight: 28.2, dispersion: "26m" },
                { range: 1700, elevation: 942, timeOfFlight: 27.3, dispersion: "30m" },
                { range: 1800, elevation: 879, timeOfFlight: 26.2, dispersion: "37m" },
                { range: 1900, elevation: 796, timeOfFlight: 24.6, dispersion: "0m" }
            ],
            // Ring 3 - MOD C-832C Illumination (ตามภาพ Ring 3 - Dispersion: 39m)  
            3: [
                { range: 400, elevation: 1426, timeOfFlight: 40.4, dispersion: "10m" },
                { range: 500, elevation: 1407, timeOfFlight: 40.3, dispersion: "10m" },
                { range: 600, elevation: 1387, timeOfFlight: 40.2, dispersion: "9m" },
                { range: 700, elevation: 1368, timeOfFlight: 40.1, dispersion: "10m" },
                { range: 800, elevation: 1348, timeOfFlight: 40.0, dispersion: "10m" },
                { range: 900, elevation: 1328, timeOfFlight: 39.9, dispersion: "11m" },
                { range: 1000, elevation: 1307, timeOfFlight: 39.7, dispersion: "11m" },
                { range: 1100, elevation: 1286, timeOfFlight: 39.5, dispersion: "11m" },
                { range: 1200, elevation: 1264, timeOfFlight: 39.3, dispersion: "11m" },
                { range: 1300, elevation: 1242, timeOfFlight: 39.1, dispersion: "12m" },
                { range: 1400, elevation: 1219, timeOfFlight: 38.9, dispersion: "12m" },
                { range: 1500, elevation: 1195, timeOfFlight: 38.6, dispersion: "12m" },
                { range: 1600, elevation: 1170, timeOfFlight: 38.3, dispersion: "12m" },
                { range: 1700, elevation: 1145, timeOfFlight: 37.9, dispersion: "13m" },
                { range: 1800, elevation: 1118, timeOfFlight: 37.5, dispersion: "13m" },
                { range: 1900, elevation: 1090, timeOfFlight: 37.1, dispersion: "14m" },
                { range: 2000, elevation: 1061, timeOfFlight: 36.6, dispersion: "15m" },
                { range: 2100, elevation: 1031, timeOfFlight: 36.1, dispersion: "17m" },
                { range: 2200, elevation: 997, timeOfFlight: 35.5, dispersion: "17m" },
                { range: 2300, elevation: 962, timeOfFlight: 34.8, dispersion: "19m" },
                { range: 2400, elevation: 923, timeOfFlight: 34.0, dispersion: "21m" },
                { range: 2500, elevation: 880, timeOfFlight: 33.1, dispersion: "23m" },
                { range: 2600, elevation: 831, timeOfFlight: 31.9, dispersion: "27m" },
                { range: 2700, elevation: 771, timeOfFlight: 30.5, dispersion: "0m" }
            ],
            // Ring 4 - MOD C-832C Illumination (ตามภาพ Ring 4 - Dispersion: 53m)
            4: [
                { range: 600, elevation: 1414, timeOfFlight: 50.3, dispersion: "7m" },
                { range: 700, elevation: 1400, timeOfFlight: 50.3, dispersion: "8m" },
                { range: 800, elevation: 1385, timeOfFlight: 50.2, dispersion: "7m" },
                { range: 900, elevation: 1370, timeOfFlight: 50.1, dispersion: "7m" },
                { range: 1000, elevation: 1355, timeOfFlight: 50.0, dispersion: "8m" },
                { range: 1100, elevation: 1340, timeOfFlight: 49.9, dispersion: "8m" },
                { range: 1200, elevation: 1324, timeOfFlight: 49.7, dispersion: "8m" },
                { range: 1300, elevation: 1308, timeOfFlight: 49.6, dispersion: "8m" },
                { range: 1400, elevation: 1292, timeOfFlight: 49.4, dispersion: "8m" },
                { range: 1500, elevation: 1276, timeOfFlight: 49.2, dispersion: "8m" },
                { range: 1600, elevation: 1260, timeOfFlight: 49.0, dispersion: "9m" },
                { range: 1700, elevation: 1243, timeOfFlight: 48.8, dispersion: "9m" },
                { range: 1800, elevation: 1225, timeOfFlight: 48.6, dispersion: "8m" },
                { range: 1900, elevation: 1208, timeOfFlight: 48.3, dispersion: "9m" },
                { range: 2000, elevation: 1190, timeOfFlight: 48.1, dispersion: "9m" },
                { range: 2100, elevation: 1172, timeOfFlight: 47.8, dispersion: "10m" },
                { range: 2200, elevation: 1153, timeOfFlight: 47.5, dispersion: "10m" },
                { range: 2300, elevation: 1134, timeOfFlight: 47.1, dispersion: "10m" },
                { range: 2400, elevation: 1114, timeOfFlight: 46.8, dispersion: "10m" },
                { range: 2500, elevation: 1093, timeOfFlight: 46.4, dispersion: "10m" },
                { range: 2600, elevation: 1072, timeOfFlight: 46.0, dispersion: "10m" },
                { range: 2700, elevation: 1051, timeOfFlight: 45.5, dispersion: "11m" },
                { range: 2800, elevation: 1028, timeOfFlight: 45.0, dispersion: "11m" },
                { range: 2900, elevation: 1005, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 3000, elevation: 981, timeOfFlight: 44.0, dispersion: "13m" },
                { range: 3100, elevation: 955, timeOfFlight: 43.3, dispersion: "13m" },
                { range: 3200, elevation: 928, timeOfFlight: 42.7, dispersion: "13m" },
                { range: 3300, elevation: 900, timeOfFlight: 41.9, dispersion: "15m" },
                { range: 3400, elevation: 870, timeOfFlight: 41.1, dispersion: "16m" },
                { range: 3500, elevation: 838, timeOfFlight: 40.2, dispersion: "18m" },
                { range: 3600, elevation: 802, timeOfFlight: 39.2, dispersion: "19m" },
                { range: 3700, elevation: 763, timeOfFlight: 38.0, dispersion: "0m" }
            ]
        }
    },
    // MOD M777 Howitzer 155mm — สกัดจาก M107_Shell_155mm_HE.conf ("Indirect fire Table data")
    // มิลระบบ NATO (6400) เฉพาะวิถีโค้งสูง 45-71.7 องศาตามขีดจำกัดฐานปืน
    // dispersion = Hw = |มุมยกที่ระยะ R+50 - มุมยกที่ระยะ R| หน่วยมิล (สูตรเดียวกับที่เกมใช้)
    m777: {
        M107: {
            1: [
                { range: 2900, elevation: 1266, timeOfFlight: 43.3, dispersion: "7m" },
                { range: 3000, elevation: 1252, timeOfFlight: 43.1, dispersion: "7m" },
                { range: 3100, elevation: 1237, timeOfFlight: 42.9, dispersion: "7m" },
                { range: 3200, elevation: 1223, timeOfFlight: 42.7, dispersion: "8m" },
                { range: 3300, elevation: 1208, timeOfFlight: 42.5, dispersion: "8m" },
                { range: 3400, elevation: 1192, timeOfFlight: 42.2, dispersion: "8m" },
                { range: 3500, elevation: 1176, timeOfFlight: 41.9, dispersion: "8m" },
                { range: 3600, elevation: 1160, timeOfFlight: 41.6, dispersion: "8m" },
                { range: 3700, elevation: 1143, timeOfFlight: 41.3, dispersion: "9m" },
                { range: 3800, elevation: 1125, timeOfFlight: 41.0, dispersion: "9m" },
                { range: 3900, elevation: 1106, timeOfFlight: 40.6, dispersion: "9m" },
                { range: 4000, elevation: 1087, timeOfFlight: 40.2, dispersion: "10m" },
                { range: 4100, elevation: 1066, timeOfFlight: 39.7, dispersion: "11m" },
                { range: 4200, elevation: 1044, timeOfFlight: 39.2, dispersion: "12m" },
                { range: 4300, elevation: 1020, timeOfFlight: 38.7, dispersion: "13m" },
                { range: 4400, elevation: 993, timeOfFlight: 38.0, dispersion: "14m" },
                { range: 4500, elevation: 963, timeOfFlight: 37.3, dispersion: "17m" },
                { range: 4600, elevation: 928, timeOfFlight: 36.4, dispersion: "22m" },
                { range: 4700, elevation: 881, timeOfFlight: 35.1, dispersion: "32m" }
            ],
            2: [
                { range: 4300, elevation: 1267, timeOfFlight: 54.0, dispersion: "5m" },
                { range: 4400, elevation: 1257, timeOfFlight: 53.8, dispersion: "4m" },
                { range: 4500, elevation: 1248, timeOfFlight: 53.6, dispersion: "5m" },
                { range: 4600, elevation: 1238, timeOfFlight: 53.4, dispersion: "5m" },
                { range: 4700, elevation: 1228, timeOfFlight: 53.2, dispersion: "5m" },
                { range: 4800, elevation: 1218, timeOfFlight: 53.1, dispersion: "5m" },
                { range: 4900, elevation: 1208, timeOfFlight: 52.8, dispersion: "5m" },
                { range: 5000, elevation: 1198, timeOfFlight: 52.6, dispersion: "5m" },
                { range: 5100, elevation: 1187, timeOfFlight: 52.4, dispersion: "5m" },
                { range: 5200, elevation: 1177, timeOfFlight: 52.2, dispersion: "6m" },
                { range: 5300, elevation: 1166, timeOfFlight: 51.9, dispersion: "6m" },
                { range: 5400, elevation: 1154, timeOfFlight: 51.7, dispersion: "6m" },
                { range: 5500, elevation: 1143, timeOfFlight: 51.4, dispersion: "6m" },
                { range: 5600, elevation: 1131, timeOfFlight: 51.1, dispersion: "6m" },
                { range: 5700, elevation: 1118, timeOfFlight: 50.8, dispersion: "6m" },
                { range: 5800, elevation: 1106, timeOfFlight: 50.5, dispersion: "7m" },
                { range: 5900, elevation: 1093, timeOfFlight: 50.2, dispersion: "7m" },
                { range: 6000, elevation: 1079, timeOfFlight: 49.8, dispersion: "7m" },
                { range: 6100, elevation: 1065, timeOfFlight: 49.4, dispersion: "7m" },
                { range: 6200, elevation: 1050, timeOfFlight: 49.0, dispersion: "8m" },
                { range: 6300, elevation: 1035, timeOfFlight: 48.6, dispersion: "8m" },
                { range: 6400, elevation: 1018, timeOfFlight: 48.1, dispersion: "8m" },
                { range: 6500, elevation: 1001, timeOfFlight: 47.6, dispersion: "9m" },
                { range: 6600, elevation: 982, timeOfFlight: 47.1, dispersion: "10m" },
                { range: 6700, elevation: 962, timeOfFlight: 46.4, dispersion: "11m" },
                { range: 6800, elevation: 940, timeOfFlight: 45.7, dispersion: "13m" },
                { range: 6900, elevation: 914, timeOfFlight: 44.9, dispersion: "14m" },
                { range: 7000, elevation: 884, timeOfFlight: 43.9, dispersion: "18m" },
                { range: 7100, elevation: 844, timeOfFlight: 42.4, dispersion: "30m" }
            ],
            3: [
                { range: 6800, elevation: 1271, timeOfFlight: 70.9, dispersion: "3m" },
                { range: 7000, elevation: 1259, timeOfFlight: 70.6, dispersion: "3m" },
                { range: 7200, elevation: 1247, timeOfFlight: 70.3, dispersion: "3m" },
                { range: 7400, elevation: 1235, timeOfFlight: 70.0, dispersion: "3m" },
                { range: 7600, elevation: 1222, timeOfFlight: 69.7, dispersion: "3m" },
                { range: 7800, elevation: 1210, timeOfFlight: 69.4, dispersion: "4m" },
                { range: 8000, elevation: 1197, timeOfFlight: 69.1, dispersion: "4m" },
                { range: 8200, elevation: 1183, timeOfFlight: 68.7, dispersion: "3m" },
                { range: 8400, elevation: 1169, timeOfFlight: 68.3, dispersion: "3m" },
                { range: 8600, elevation: 1155, timeOfFlight: 67.9, dispersion: "3m" },
                { range: 8800, elevation: 1141, timeOfFlight: 67.5, dispersion: "4m" },
                { range: 9000, elevation: 1126, timeOfFlight: 67.0, dispersion: "4m" },
                { range: 9200, elevation: 1110, timeOfFlight: 66.5, dispersion: "4m" },
                { range: 9400, elevation: 1094, timeOfFlight: 66.0, dispersion: "4m" },
                { range: 9600, elevation: 1077, timeOfFlight: 65.4, dispersion: "4m" },
                { range: 9800, elevation: 1060, timeOfFlight: 64.8, dispersion: "5m" },
                { range: 10000, elevation: 1041, timeOfFlight: 64.1, dispersion: "5m" },
                { range: 10200, elevation: 1021, timeOfFlight: 63.4, dispersion: "5m" },
                { range: 10400, elevation: 1000, timeOfFlight: 62.6, dispersion: "5m" },
                { range: 10600, elevation: 978, timeOfFlight: 61.8, dispersion: "6m" },
                { range: 10800, elevation: 953, timeOfFlight: 60.8, dispersion: "7m" },
                { range: 11000, elevation: 925, timeOfFlight: 59.6, dispersion: "8m" },
                { range: 11200, elevation: 893, timeOfFlight: 58.2, dispersion: "9m" },
                { range: 11400, elevation: 853, timeOfFlight: 56.5, dispersion: "12m" }
            ],
            4: [
                { range: 8800, elevation: 1274, timeOfFlight: 83.7, dispersion: "2m" },
                { range: 9000, elevation: 1265, timeOfFlight: 83.5, dispersion: "2m" },
                { range: 9200, elevation: 1256, timeOfFlight: 83.3, dispersion: "2m" },
                { range: 9400, elevation: 1247, timeOfFlight: 83.0, dispersion: "2m" },
                { range: 9600, elevation: 1238, timeOfFlight: 82.7, dispersion: "3m" },
                { range: 9800, elevation: 1228, timeOfFlight: 82.5, dispersion: "2m" },
                { range: 10000, elevation: 1218, timeOfFlight: 82.2, dispersion: "2m" },
                { range: 10200, elevation: 1209, timeOfFlight: 81.9, dispersion: "3m" },
                { range: 10400, elevation: 1199, timeOfFlight: 81.6, dispersion: "3m" },
                { range: 10600, elevation: 1189, timeOfFlight: 81.3, dispersion: "3m" },
                { range: 10800, elevation: 1178, timeOfFlight: 80.9, dispersion: "2m" },
                { range: 11000, elevation: 1168, timeOfFlight: 80.6, dispersion: "3m" },
                { range: 11200, elevation: 1157, timeOfFlight: 80.2, dispersion: "3m" },
                { range: 11400, elevation: 1146, timeOfFlight: 79.8, dispersion: "3m" },
                { range: 11600, elevation: 1135, timeOfFlight: 79.4, dispersion: "3m" },
                { range: 11800, elevation: 1123, timeOfFlight: 79.0, dispersion: "3m" },
                { range: 12000, elevation: 1111, timeOfFlight: 78.6, dispersion: "3m" },
                { range: 12200, elevation: 1099, timeOfFlight: 78.1, dispersion: "3m" },
                { range: 12400, elevation: 1087, timeOfFlight: 77.6, dispersion: "4m" },
                { range: 12600, elevation: 1074, timeOfFlight: 77.1, dispersion: "4m" },
                { range: 12800, elevation: 1060, timeOfFlight: 76.6, dispersion: "3m" },
                { range: 13000, elevation: 1047, timeOfFlight: 76.0, dispersion: "4m" },
                { range: 13200, elevation: 1032, timeOfFlight: 75.4, dispersion: "4m" },
                { range: 13400, elevation: 1017, timeOfFlight: 74.8, dispersion: "4m" },
                { range: 13600, elevation: 1002, timeOfFlight: 74.1, dispersion: "5m" },
                { range: 13800, elevation: 985, timeOfFlight: 73.4, dispersion: "4m" },
                { range: 14000, elevation: 968, timeOfFlight: 72.6, dispersion: "5m" },
                { range: 14200, elevation: 949, timeOfFlight: 71.7, dispersion: "5m" },
                { range: 14400, elevation: 929, timeOfFlight: 70.8, dispersion: "5m" },
                { range: 14600, elevation: 907, timeOfFlight: 69.7, dispersion: "6m" },
                { range: 14800, elevation: 883, timeOfFlight: 68.5, dispersion: "7m" },
                { range: 15000, elevation: 855, timeOfFlight: 67.0, dispersion: "8m" },
                { range: 15200, elevation: 820, timeOfFlight: 65.2, dispersion: "10m" }
            ],
            5: [
                { range: 10750, elevation: 1269, timeOfFlight: 94.6, dispersion: "2m" },
                { range: 11000, elevation: 1260, timeOfFlight: 94.3, dispersion: "2m" },
                { range: 11250, elevation: 1250, timeOfFlight: 94.0, dispersion: "2m" },
                { range: 11500, elevation: 1241, timeOfFlight: 93.7, dispersion: "2m" },
                { range: 11750, elevation: 1231, timeOfFlight: 93.4, dispersion: "2m" },
                { range: 12000, elevation: 1221, timeOfFlight: 93.0, dispersion: "2m" },
                { range: 12250, elevation: 1211, timeOfFlight: 92.7, dispersion: "2m" },
                { range: 12500, elevation: 1201, timeOfFlight: 92.3, dispersion: "2m" },
                { range: 12750, elevation: 1190, timeOfFlight: 92.0, dispersion: "2m" },
                { range: 13000, elevation: 1180, timeOfFlight: 91.6, dispersion: "2m" },
                { range: 13250, elevation: 1169, timeOfFlight: 91.2, dispersion: "2m" },
                { range: 13500, elevation: 1158, timeOfFlight: 90.8, dispersion: "2m" },
                { range: 13750, elevation: 1146, timeOfFlight: 90.3, dispersion: "2m" },
                { range: 14000, elevation: 1135, timeOfFlight: 89.9, dispersion: "2m" },
                { range: 14250, elevation: 1123, timeOfFlight: 89.4, dispersion: "2m" },
                { range: 14500, elevation: 1111, timeOfFlight: 88.9, dispersion: "3m" },
                { range: 14750, elevation: 1099, timeOfFlight: 88.4, dispersion: "3m" },
                { range: 15000, elevation: 1086, timeOfFlight: 87.8, dispersion: "3m" },
                { range: 15250, elevation: 1073, timeOfFlight: 87.3, dispersion: "3m" },
                { range: 15500, elevation: 1059, timeOfFlight: 86.7, dispersion: "3m" },
                { range: 15750, elevation: 1045, timeOfFlight: 86.0, dispersion: "3m" },
                { range: 16000, elevation: 1030, timeOfFlight: 85.3, dispersion: "3m" },
                { range: 16250, elevation: 1015, timeOfFlight: 84.6, dispersion: "3m" },
                { range: 16500, elevation: 999, timeOfFlight: 83.8, dispersion: "3m" },
                { range: 16750, elevation: 983, timeOfFlight: 83.0, dispersion: "4m" },
                { range: 17000, elevation: 965, timeOfFlight: 82.1, dispersion: "4m" },
                { range: 17250, elevation: 946, timeOfFlight: 81.2, dispersion: "3m" },
                { range: 17500, elevation: 927, timeOfFlight: 80.1, dispersion: "5m" },
                { range: 17750, elevation: 905, timeOfFlight: 78.9, dispersion: "4m" },
                { range: 18000, elevation: 881, timeOfFlight: 77.6, dispersion: "5m" },
                { range: 18250, elevation: 855, timeOfFlight: 76.1, dispersion: "6m" },
                { range: 18500, elevation: 824, timeOfFlight: 74.2, dispersion: "7m" }
            ]
        }
    }
};

// ===================== WIND CORRECTION DATA (ลมในเกม - กระสุน Original) =====================
// สกัดจากไฟล์เกมโดยตรง: WindData_Shell_*.conf ใน data007.pak
// รูปแบบแต่ละแถว: [ระยะ (m), Zw = ค่าแก้ทิศจากลมขวาง (mils ต่อลม 10 m/s), Xw = ค่าแก้ระยะจากลมตามแนวยิง (m ต่อลม 10 m/s)]
// วิธีใช้: องค์ประกอบลม = ความเร็วลม x cos/sin(ทิศลมพัดมาจาก - อาซิมุทยิง)
//   - แก้ระยะ:  ระยะเล็ง = ระยะจริง + (Xw / 10) x องค์ประกอบลมตามแนวยิง
//   - แก้ทิศ:   อาซิมุท (mils) += (Zw / 10) x องค์ประกอบลมขวาง
//
// หมายเหตุการแก้ข้อมูล (สิงหาคม 2026):
// ชุดแรกลอกมาจาก arma-mortar.com ซึ่ง Zw สูงเกินจริง
// ชุดที่สองสกัดจากไฟล์เกมแต่จับคู่แถวผิด (ไล่หาแถวที่มุมตกกระทบตรงกับมุมยิง)
//   ทำให้ Zw ต่ำกว่าจริง และลืมแปลงมิลลิเรเดียนเป็นมิลอีก 1.86%
// ชุดนี้ (ชุดที่สาม) จับคู่ตามลำดับแถวตามที่เกมทำจริง (SCR_ProjectileWindData.c ใช้ midId กับ t ชุดเดียวกันทั้งสองอาร์เรย์)
//   และแปลงหน่วยถูกต้อง ตรวจกับการจำลองวิถีกระสุนอิสระแล้วได้อัตราส่วน 1.000
const WIND_DATA = {
    M821: {
        0: [[50, 72, 4], [100, 36, 4], [150, 24, 4], [200, 18, 4], [250, 15, 5], [300, 12, 5], [350, 10, 5], [400, 8, 6]],
        1: [[100, 114, 11], [200, 58, 12], [300, 39, 13], [400, 30, 14], [500, 24, 15], [600, 20, 16], [700, 17, 17], [800, 14, 18], [900, 12, 18]],
        2: [[200, 133, 26], [300, 88, 27], [400, 66, 28], [500, 53, 29], [600, 45, 30], [700, 39, 31], [800, 34, 33], [900, 30, 34], [1000, 27, 36], [1100, 25, 37], [1200, 22, 38], [1300, 20, 39], [1400, 19, 40], [1500, 17, 40], [1600, 15, 40]],
        3: [[300, 146, 44], [400, 109, 44], [500, 88, 45], [600, 73, 46], [700, 63, 48], [800, 55, 49], [900, 49, 50], [1000, 45, 52], [1100, 41, 53], [1200, 37, 55], [1300, 34, 56], [1400, 32, 58], [1500, 30, 59], [1600, 28, 60], [1700, 26, 62], [1800, 24, 63], [1900, 23, 64], [2000, 21, 64], [2100, 19, 65], [2200, 18, 64], [2300, 15, 60]],
        4: [[400, 159, 64], [500, 128, 65], [600, 107, 66], [700, 92, 67], [800, 80, 68], [900, 72, 69], [1000, 65, 71], [1100, 59, 72], [1200, 54, 74], [1300, 50, 75], [1400, 46, 77], [1500, 43, 78], [1600, 41, 80], [1700, 38, 81], [1800, 36, 83], [1900, 34, 84], [2000, 32, 86], [2100, 31, 87], [2200, 29, 88], [2300, 28, 89], [2400, 26, 90], [2500, 25, 91], [2600, 23, 91], [2700, 22, 91], [2800, 20, 91], [2900, 18, 88]]
    },
    M819: {
        1: [[200, 69, 15], [250, 55, 15], [300, 46, 16], [350, 40, 17], [400, 35, 17], [450, 31, 18], [500, 28, 19], [550, 25, 20], [600, 23, 20], [650, 21, 21], [700, 18, 21], [750, 15, 20]],
        2: [[200, 172, 35], [300, 116, 36], [400, 88, 37], [500, 71, 39], [600, 59, 41], [700, 51, 43], [800, 44, 45], [900, 39, 47], [1000, 35, 48], [1100, 32, 50], [1200, 28, 51], [1300, 25, 51], [1400, 20, 48]],
        3: [[300, 190, 58], [400, 143, 59], [500, 115, 60], [600, 96, 62], [700, 83, 64], [800, 73, 66], [900, 65, 68], [1000, 58, 70], [1100, 53, 72], [1200, 48, 74], [1300, 44, 75], [1400, 41, 77], [1500, 38, 79], [1600, 35, 80], [1700, 32, 81], [1800, 29, 80], [1900, 26, 79]],
        4: [[400, 202, 82], [500, 161, 83], [600, 135, 84], [700, 116, 86], [800, 102, 88], [900, 91, 90], [1000, 82, 92], [1100, 75, 94], [1200, 68, 96], [1300, 63, 98], [1400, 58, 100], [1500, 54, 101], [1600, 51, 103], [1700, 48, 105], [1800, 45, 107], [1900, 42, 108], [2000, 39, 109], [2100, 36, 110], [2200, 34, 110], [2300, 31, 109], [2400, 28, 106]]
    },
    M853A1: {
        1: [[200, 137, 29], [250, 110, 30], [300, 92, 31], [350, 79, 32], [400, 70, 34], [450, 62, 35], [500, 55, 36], [550, 50, 38], [600, 45, 39], [650, 40, 39], [700, 36, 39], [750, 30, 38]],
        2: [[200, 354, 73], [300, 241, 75], [400, 183, 77], [500, 147, 80], [600, 123, 82], [700, 106, 85], [800, 92, 88], [900, 82, 90], [1000, 73, 93], [1100, 65, 95], [1200, 58, 96], [1300, 52, 96], [1400, 44, 94]],
        3: [[300, 373, 116], [400, 283, 118], [500, 230, 120], [600, 192, 122], [700, 165, 124], [800, 145, 127], [900, 129, 129], [1000, 116, 131], [1100, 105, 134], [1200, 95, 136], [1300, 87, 138], [1400, 80, 139], [1500, 74, 141], [1600, 68, 141], [1700, 62, 141], [1800, 56, 140], [1900, 50, 136]],
        4: [[400, 392, 164], [500, 317, 165], [600, 268, 167], [700, 231, 169], [800, 203, 171], [900, 180, 173], [1000, 163, 175], [1100, 148, 177], [1200, 135, 179], [1300, 124, 181], [1400, 115, 183], [1500, 107, 184], [1600, 99, 186], [1700, 93, 187], [1800, 86, 188], [1900, 81, 188], [2000, 75, 188], [2100, 70, 188], [2200, 65, 186], [2300, 60, 183], [2400, 54, 177]]
    },
    "0-832Ay": {
        0: [[50, 167, 9], [100, 82, 9], [150, 55, 9], [200, 42, 10], [250, 33, 11], [300, 28, 11], [350, 24, 12], [400, 21, 13], [450, 18, 13], [500, 15, 14]],
        1: [[100, 171, 18], [200, 86, 19], [300, 58, 20], [400, 44, 22], [500, 35, 24], [600, 29, 26], [700, 25, 27], [800, 20, 28]],
        2: [[200, 169, 37], [300, 114, 38], [400, 86, 39], [500, 69, 41], [600, 58, 43], [700, 50, 45], [800, 44, 47], [900, 39, 49], [1000, 35, 50], [1100, 31, 52], [1200, 28, 53], [1300, 24, 53], [1400, 19, 50]],
        3: [[300, 175, 57], [400, 132, 58], [500, 106, 60], [600, 89, 61], [700, 76, 63], [800, 67, 65], [900, 60, 67], [1000, 54, 69], [1100, 49, 71], [1200, 44, 73], [1300, 41, 75], [1400, 37, 77], [1500, 34, 78], [1600, 31, 79], [1700, 29, 79], [1800, 25, 78]],
        4: [[400, 186, 81], [500, 150, 82], [600, 126, 84], [700, 108, 86], [800, 95, 88], [900, 84, 90], [1000, 76, 92], [1100, 69, 94], [1200, 63, 96], [1300, 58, 98], [1400, 54, 100], [1500, 50, 101], [1600, 47, 103], [1700, 44, 105], [1800, 41, 106], [1900, 38, 107], [2000, 36, 108], [2100, 33, 108], [2200, 30, 108], [2300, 27, 105]]
    },
    "A-832AY": {
        0: [[50, 129, 7], [100, 65, 7], [150, 44, 8], [200, 33, 8], [250, 27, 9], [300, 22, 9], [350, 19, 10], [400, 16, 11], [450, 13, 11]],
        1: [[200, 72, 16], [300, 48, 17], [400, 37, 19], [500, 29, 21], [600, 24, 22], [700, 20, 23], [800, 15, 23]],
        2: [[300, 95, 32], [400, 71, 33], [500, 58, 35], [600, 48, 37], [700, 41, 38], [800, 36, 40], [900, 32, 42], [1000, 28, 44], [1100, 25, 45], [1200, 22, 45]],
        3: [[400, 109, 48], [500, 88, 50], [600, 73, 52], [700, 63, 54], [800, 55, 55], [900, 49, 57], [1000, 44, 59], [1100, 40, 61], [1200, 36, 63], [1300, 33, 65], [1400, 30, 66], [1500, 27, 67], [1600, 24, 66], [1700, 20, 62]]
    },
    "C-832C": {
        1: [[100, 260, 28], [150, 175, 29], [200, 133, 31], [250, 107, 32], [300, 89, 34], [350, 76, 35], [400, 66, 37], [450, 58, 38], [500, 51, 39], [550, 44, 40], [600, 36, 38]],
        2: [[200, 337, 75], [300, 231, 78], [400, 175, 80], [500, 140, 83], [600, 117, 86], [700, 100, 89], [800, 86, 92], [900, 75, 94], [1000, 65, 95], [1100, 55, 93]],
        3: [[300, 376, 126], [400, 287, 128], [500, 232, 131], [600, 194, 133], [700, 167, 136], [800, 146, 138], [900, 129, 141], [1000, 115, 143], [1100, 104, 145], [1200, 94, 146], [1300, 85, 147], [1400, 76, 147], [1500, 68, 145], [1600, 59, 139]],
        4: [[400, 440, 201], [500, 361, 202], [600, 304, 204], [700, 263, 205], [800, 230, 207], [900, 205, 209], [1000, 184, 210], [1100, 167, 212], [1200, 153, 213], [1300, 140, 215], [1400, 129, 216], [1500, 119, 216], [1600, 110, 216], [1700, 102, 216], [1800, 95, 215], [1900, 88, 214], [2000, 81, 211], [2100, 74, 207], [2200, 66, 199]]
    }
};

// ตารางค่าแก้ลมของ MOD Adult Mortars (v1.0.4) — สกัดจากไฟล์ AM_WindData_*.conf ใน data.pak ของ mod โดยตรง
// (SCR_ProjectileWindTable ที่ลม 10 m/s) แล้วแปลงจากแกนมุมยก → แกนระยะ ตามแนวระยะเดียวกับตาราง BALLISTIC_DATA.mod
// รูปแบบเดียวกับ WIND_DATA: [ระยะ (m), Zw (mils ตามระบบมิลของปืน ต่อลม 10 m/s), Xw (m ต่อลม 10 m/s)]
const WIND_DATA_MOD = {
    M821: {
        0: [[50, 70, 4], [100, 35, 4], [150, 23, 4], [200, 17, 4], [250, 14, 5], [300, 12, 5], [350, 10, 5], [400, 8, 6]],
        1: [[300, 96, 33], [400, 72, 34], [500, 58, 36], [600, 48, 37], [700, 42, 39], [800, 37, 40], [900, 33, 42], [1000, 29, 43], [1100, 27, 45], [1200, 25, 46], [1300, 23, 47], [1400, 21, 49], [1500, 19, 49], [1600, 18, 50], [1700, 16, 49], [1800, 15, 48], [1900, 12, 43]],
        2: [[500, 121, 77], [600, 101, 79], [700, 86, 80], [800, 76, 82], [900, 67, 84], [1000, 61, 85], [1100, 55, 87], [1200, 51, 89], [1300, 47, 91], [1400, 44, 93], [1500, 41, 95], [1600, 38, 97], [1700, 36, 98], [1800, 34, 100], [1900, 32, 101], [2000, 31, 103], [2100, 29, 104], [2200, 28, 105], [2300, 26, 106], [2400, 25, 106], [2500, 24, 107], [2600, 23, 107], [2700, 22, 106], [2800, 21, 105], [2900, 20, 104], [3000, 19, 102], [3100, 18, 99], [3200, 16, 95], [3300, 14, 86]],
        3: [[700, 130, 129], [800, 114, 131], [900, 101, 132], [1000, 91, 134], [1100, 83, 136], [1200, 76, 138], [1300, 70, 140], [1400, 66, 142], [1500, 61, 144], [1600, 57, 146], [1700, 54, 148], [1800, 51, 150], [1900, 48, 152], [2000, 46, 154], [2100, 44, 156], [2200, 42, 157], [2300, 40, 159], [2400, 39, 160], [2500, 37, 162], [2600, 36, 163], [2700, 34, 164], [2800, 33, 165], [2900, 32, 166], [3000, 31, 166], [3100, 30, 166], [3200, 29, 167], [3300, 28, 166], [3400, 27, 166], [3500, 26, 165], [3600, 25, 165], [3700, 24, 163], [3800, 23, 162], [3900, 22, 160], [4000, 22, 158], [4100, 21, 155], [4200, 20, 152], [4300, 19, 148], [4400, 18, 143], [4500, 17, 136], [4600, 16, 126]],
        4: [[900, 134, 190], [1000, 121, 191], [1100, 110, 193], [1200, 100, 195], [1300, 93, 197], [1400, 87, 199], [1500, 81, 201], [1600, 75, 204], [1700, 71, 206], [1800, 67, 208], [1900, 64, 210], [2000, 61, 212], [2100, 58, 214], [2200, 55, 216], [2300, 53, 218], [2400, 51, 219], [2500, 49, 221], [2600, 47, 222], [2700, 45, 224], [2800, 43, 225], [2900, 42, 226], [3000, 41, 227], [3100, 39, 228], [3200, 38, 229], [3300, 37, 230], [3400, 36, 230], [3500, 35, 231], [3600, 34, 231], [3700, 33, 231], [3800, 32, 230], [3900, 31, 230], [4000, 30, 229], [4100, 29, 228], [4200, 29, 228], [4300, 28, 226], [4400, 27, 225], [4500, 27, 223], [4600, 26, 222], [4700, 25, 220], [4800, 25, 217], [4900, 24, 215], [5000, 23, 212], [5100, 23, 209], [5200, 22, 206], [5300, 21, 202], [5400, 21, 198], [5500, 20, 194], [5600, 19, 189], [5700, 19, 182], [5800, 18, 175], [5900, 17, 165]]
    },
    M819: {
        1: [[300, 109, 40], [350, 93, 41], [400, 82, 42], [450, 73, 43], [500, 66, 44], [550, 60, 45], [600, 55, 46], [650, 51, 47], [700, 47, 49], [750, 44, 50], [800, 41, 51], [850, 39, 52], [900, 37, 53], [950, 35, 54], [1000, 33, 54], [1050, 31, 55], [1100, 30, 56], [1150, 28, 56], [1200, 27, 56], [1250, 25, 56], [1300, 24, 56], [1350, 23, 55], [1400, 21, 54], [1450, 20, 52], [1500, 17, 48]],
        2: [[400, 179, 101], [500, 144, 103], [600, 120, 106], [700, 103, 108], [800, 90, 111], [900, 80, 113], [1000, 72, 116], [1100, 66, 119], [1200, 61, 121], [1300, 56, 123], [1400, 52, 125], [1500, 49, 127], [1600, 45, 129], [1700, 43, 130], [1800, 40, 131], [1900, 38, 131], [2000, 36, 131], [2100, 34, 131], [2200, 32, 130], [2300, 30, 128], [2400, 29, 125], [2500, 27, 122], [2600, 25, 118], [2700, 23, 111], [2800, 21, 101]],
        3: [[500, 204, 168], [600, 171, 170], [700, 147, 172], [800, 129, 175], [900, 115, 178], [1000, 103, 180], [1100, 94, 183], [1200, 86, 186], [1300, 79, 188], [1400, 74, 191], [1500, 69, 193], [1600, 65, 195], [1700, 61, 197], [1800, 58, 198], [1900, 55, 200], [2000, 52, 201], [2100, 50, 201], [2200, 47, 202], [2300, 45, 202], [2400, 43, 201], [2500, 42, 201], [2600, 40, 200], [2700, 38, 198], [2800, 37, 197], [2900, 35, 194], [3000, 34, 192], [3100, 33, 189], [3200, 32, 186], [3300, 30, 182], [3400, 29, 178], [3500, 28, 173], [3600, 27, 167], [3700, 25, 161], [3800, 24, 153], [3900, 22, 141]],
        4: [[800, 157, 242], [900, 140, 245], [1000, 126, 247], [1100, 115, 250], [1200, 105, 253], [1300, 97, 255], [1400, 90, 257], [1500, 84, 259], [1600, 79, 262], [1700, 74, 263], [1800, 70, 265], [1900, 67, 266], [2000, 63, 267], [2100, 61, 268], [2200, 58, 268], [2300, 55, 269], [2400, 53, 269], [2500, 51, 268], [2600, 49, 268], [2700, 48, 267], [2800, 46, 266], [2900, 44, 264], [3000, 43, 262], [3100, 42, 260], [3200, 40, 258], [3300, 39, 256], [3400, 38, 253], [3500, 37, 250], [3600, 36, 247], [3700, 35, 244], [3800, 34, 240], [3900, 33, 236], [4000, 32, 232], [4100, 31, 228], [4200, 30, 223], [4300, 29, 219], [4400, 28, 213], [4500, 27, 207], [4600, 26, 201], [4700, 25, 194], [4800, 24, 185], [4900, 23, 174]]
    },
    M853A1: {
        1: [[300, 175, 78], [350, 151, 79], [400, 132, 81], [450, 118, 83], [500, 106, 85], [550, 96, 86], [600, 88, 88], [650, 82, 90], [700, 76, 91], [750, 71, 93], [800, 66, 94], [850, 62, 95], [900, 59, 96], [950, 56, 96], [1000, 53, 96], [1050, 50, 96], [1100, 47, 95], [1150, 45, 94], [1200, 42, 93], [1250, 40, 91], [1300, 38, 89], [1350, 35, 85], [1400, 33, 81], [1450, 29, 73]],
        2: [[500, 198, 219], [600, 165, 223], [700, 142, 226], [800, 124, 228], [900, 111, 230], [1000, 100, 232], [1100, 92, 232], [1200, 84, 232], [1300, 78, 231], [1400, 73, 230], [1500, 69, 228], [1600, 65, 225], [1700, 61, 222], [1800, 58, 218], [1900, 55, 214], [2000, 53, 209], [2100, 50, 204], [2200, 48, 199], [2300, 46, 193], [2400, 44, 187], [2500, 42, 180], [2600, 39, 173], [2700, 37, 164], [2800, 35, 155], [2900, 32, 142]],
        3: [[700, 156, 355], [800, 137, 356], [900, 123, 355], [1000, 111, 353], [1100, 102, 351], [1200, 95, 348], [1300, 88, 345], [1400, 83, 341], [1500, 79, 336], [1600, 75, 332], [1700, 71, 327], [1800, 68, 322], [1900, 65, 317], [2000, 63, 312], [2100, 61, 307], [2200, 58, 301], [2300, 56, 296], [2400, 55, 291], [2500, 53, 285], [2600, 51, 280], [2700, 50, 274], [2800, 48, 269], [2900, 47, 263], [3000, 46, 257], [3100, 44, 251], [3200, 43, 246], [3300, 42, 239], [3400, 41, 233], [3500, 40, 227], [3600, 38, 221], [3700, 37, 214], [3800, 36, 207], [3900, 35, 199], [4000, 33, 191], [4100, 32, 182]],
        4: [[3400, 45, 295], [3500, 44, 290], [3600, 43, 284], [3700, 42, 279], [3800, 41, 274], [3900, 40, 268], [4000, 39, 263], [4100, 38, 258], [4200, 38, 252], [4300, 37, 247], [4400, 36, 241], [4500, 35, 235], [4600, 34, 229], [4700, 33, 223], [4800, 33, 217], [4900, 32, 210], [5000, 31, 203]]
    },
    "0-832Ay": {
        0: [[50, 167, 9], [100, 83, 9], [150, 55, 9], [200, 41, 10], [250, 33, 11], [300, 28, 12], [350, 24, 12], [400, 21, 13], [450, 18, 13], [500, 15, 13]],
        1: [[200, 166, 40], [300, 111, 41], [400, 83, 43], [500, 67, 45], [600, 56, 48], [700, 48, 50], [800, 42, 52], [900, 38, 54], [1000, 34, 56], [1100, 30, 57], [1200, 27, 57], [1300, 24, 57], [1400, 21, 54]],
        2: [[300, 198, 80], [400, 150, 82], [500, 120, 84], [600, 100, 87], [700, 86, 89], [800, 75, 92], [900, 67, 94], [1000, 61, 97], [1100, 55, 99], [1200, 51, 102], [1300, 47, 103], [1400, 43, 105], [1500, 40, 106], [1600, 38, 107], [1700, 35, 107], [1800, 33, 107], [1900, 31, 106], [2000, 29, 104], [2100, 27, 101], [2200, 24, 97], [2300, 22, 89]],
        3: [[400, 207, 124], [500, 167, 127], [600, 139, 129], [700, 119, 131], [800, 104, 134], [900, 93, 137], [1000, 84, 140], [1100, 76, 142], [1200, 70, 145], [1300, 65, 147], [1400, 60, 150], [1500, 56, 152], [1600, 53, 153], [1700, 50, 155], [1800, 47, 156], [1900, 44, 156], [2000, 42, 156], [2100, 40, 156], [2200, 38, 155], [2300, 36, 154], [2400, 34, 153], [2500, 33, 150], [2600, 31, 148], [2700, 29, 144], [2800, 28, 140], [2900, 26, 134], [3000, 24, 127], [3100, 22, 115]],
        4: [[600, 176, 180], [700, 151, 183], [800, 132, 186], [900, 118, 188], [1000, 106, 191], [1100, 96, 194], [1200, 89, 196], [1300, 82, 199], [1400, 76, 201], [1500, 71, 204], [1600, 67, 205], [1700, 63, 207], [1800, 59, 209], [1900, 56, 210], [2000, 54, 210], [2100, 51, 211], [2200, 49, 211], [2300, 47, 211], [2400, 45, 210], [2500, 43, 209], [2600, 41, 208], [2700, 40, 206], [2800, 38, 204], [2900, 37, 202], [3000, 35, 199], [3100, 34, 196], [3200, 33, 192], [3300, 31, 188], [3400, 30, 184], [3500, 29, 179], [3600, 28, 173], [3700, 26, 166], [3800, 25, 158], [3900, 23, 147]]
    },
    "A-832AY": {
        0: [[50, 131, 7], [100, 66, 7], [150, 44, 8], [200, 33, 8], [250, 27, 9], [300, 22, 10], [350, 19, 10], [400, 16, 11], [450, 13, 11]],
        1: [[200, 141, 33], [300, 94, 35], [400, 71, 36], [500, 57, 38], [600, 48, 41], [700, 41, 43], [800, 36, 45], [900, 32, 46], [1000, 28, 48], [1100, 25, 48], [1200, 22, 48], [1300, 19, 46]],
        2: [[300, 169, 66], [400, 128, 68], [500, 103, 70], [600, 86, 72], [700, 74, 75], [800, 65, 77], [900, 58, 80], [1000, 52, 82], [1100, 47, 84], [1200, 43, 86], [1300, 40, 88], [1400, 37, 89], [1500, 34, 90], [1600, 32, 91], [1700, 30, 90], [1800, 27, 89], [1900, 25, 87], [2000, 23, 84], [2100, 20, 77]],
        3: [[400, 181, 102], [500, 145, 104], [600, 121, 107], [700, 104, 109], [800, 91, 112], [900, 81, 114], [1000, 73, 117], [1100, 66, 120], [1200, 61, 122], [1300, 56, 124], [1400, 52, 126], [1500, 49, 128], [1600, 46, 130], [1700, 43, 131], [1800, 41, 132], [1900, 38, 132], [2000, 36, 132], [2100, 34, 132], [2200, 32, 131], [2300, 31, 129], [2400, 29, 127], [2500, 27, 124], [2600, 26, 119], [2700, 24, 114], [2800, 21, 104]]
    },
    "C-832C": {
        1: [[150, 289, 62], [200, 218, 64], [250, 176, 66], [300, 147, 68], [350, 126, 70], [400, 110, 72], [450, 98, 74], [500, 89, 76], [550, 81, 77], [600, 74, 79], [650, 68, 79], [700, 63, 80], [750, 58, 79], [800, 54, 79], [850, 50, 77], [900, 46, 75], [950, 42, 71], [1000, 37, 65]],
        2: [[300, 266, 167], [400, 201, 171], [500, 161, 175], [600, 135, 178], [700, 116, 180], [800, 102, 181], [900, 91, 181], [1000, 83, 179], [1100, 76, 177], [1200, 70, 173], [1300, 65, 168], [1400, 60, 163], [1500, 56, 157], [1600, 52, 150], [1700, 48, 142], [1800, 44, 132], [1900, 40, 120]],
        3: [[400, 228, 273], [500, 183, 275], [600, 154, 276], [700, 133, 276], [800, 118, 274], [900, 106, 271], [1000, 97, 267], [1100, 90, 263], [1200, 84, 258], [1300, 79, 253], [1400, 74, 247], [1500, 70, 241], [1600, 66, 235], [1700, 63, 228], [1800, 60, 222], [1900, 58, 215], [2000, 55, 209], [2100, 53, 202], [2200, 50, 194], [2300, 48, 187], [2400, 46, 179], [2500, 44, 171], [2600, 42, 161], [2700, 39, 151]],
        4: [[600, 143, 394], [700, 125, 387], [800, 113, 379], [900, 103, 371], [1000, 96, 363], [1100, 90, 354], [1200, 84, 346], [1300, 80, 338], [1400, 76, 331], [1500, 73, 323], [1600, 70, 315], [1700, 67, 308], [1800, 65, 301], [1900, 63, 294], [2000, 61, 288], [2100, 59, 281], [2200, 57, 274], [2300, 55, 268], [2400, 54, 262], [2500, 52, 256], [2600, 51, 249], [2700, 49, 243], [2800, 48, 237], [2900, 47, 231], [3000, 45, 225], [3100, 44, 219], [3200, 43, 212], [3300, 42, 206], [3400, 40, 199], [3500, 39, 192], [3600, 38, 185], [3700, 36, 178]]
    }
};

// ===================== ADVANCED BALLISTICS (จำลองวิถีกระสุนจริง) =====================
// ค่าคงที่ทั้งหมดสกัดจากไฟล์เกมโดยตรง (ShellMoveComponent ใน Ammo_Shell_*.et)
// สมการที่เอนจิ้นเกมใช้:  a = −g·ŷ − (AirDrag ÷ Mass)·|v−w|·(v−w)     (w = เวกเตอร์ลม)
//
// ทำไมต้องมีโหมดนี้: ตารางในเกมเป็นตาราง "พื้นราบ" ล้วน ๆ ส่วนคอลัมน์ Hw (ค่าแก้ความสูง)
// เกมคำนวณแบบลัด คือใช้ |มุมยกที่ระยะ R+50 − มุมยกที่ระยะ R| ซึ่งเท่ากับสมมติว่ามุมตกคงที่ 63.4°
// ทั้งที่มุมตกจริงอยู่ระหว่าง 64°–86° ค่าแก้จึงเพี้ยนมากเมื่อความสูงต่างกันเยอะ
// (ตัวเกมเองเวลายิงจริงใช้วิธี "จำลองวิถีใหม่" ตาม BallisticTable.GetAimHeightOfProjectileAltitudeFromSource)
//
// k = AirDrag ÷ Mass, ความเร็วต้นแต่ละ ring ปรับเทียบกับตารางที่เกม/mod แจกมา (คลาดเคลื่อน ≤ 0.05%)
// ชื่อที่แสดงบนปุ่มเลือกกระสุน (ถ้าไม่มีในนี้จะใช้ชื่อคีย์ตรง ๆ)
// ตารางค่าแก้ลมของ MOD M777 Howitzer — สกัดจาก WindData_M107_Shell_155MM_HE.conf
// รูปแบบเดียวกับ WIND_DATA: [ระยะ (m), Zw (mils NATO ต่อลม 10 m/s), Xw (m ต่อลม 10 m/s)]
const WIND_DATA_M777 = {
    M107: {
        1: [[2900, 21, 78], [3000, 20, 79], [3100, 19, 80], [3200, 19, 81], [3300, 18, 82], [3400, 18, 83], [3500, 17, 83], [3600, 16, 84], [3700, 16, 85], [3800, 15, 86], [3900, 15, 86], [4000, 14, 87], [4100, 14, 87], [4200, 13, 88], [4300, 13, 88], [4400, 12, 88], [4500, 12, 87], [4600, 11, 87], [4700, 11, 85]],
        2: [[4300, 26, 139], [4400, 25, 140], [4500, 24, 141], [4600, 24, 142], [4700, 23, 143], [4800, 23, 144], [4900, 22, 145], [5000, 22, 146], [5100, 21, 147], [5200, 21, 147], [5300, 20, 148], [5400, 20, 149], [5500, 20, 150], [5600, 19, 150], [5700, 19, 151], [5800, 18, 152], [5900, 18, 152], [6000, 17, 153], [6100, 17, 153], [6200, 17, 153], [6300, 16, 153], [6400, 16, 153], [6500, 15, 153], [6600, 15, 153], [6700, 15, 153], [6800, 14, 152], [6900, 14, 150], [7000, 13, 149], [7100, 12, 145]],
        3: [[6800, 33, 272], [7000, 32, 274], [7200, 31, 276], [7400, 30, 278], [7600, 30, 280], [7800, 29, 281], [8000, 28, 283], [8200, 27, 284], [8400, 26, 286], [8600, 26, 287], [8800, 25, 288], [9000, 24, 289], [9200, 24, 290], [9400, 23, 291], [9600, 22, 291], [9800, 22, 292], [10000, 21, 292], [10200, 20, 291], [10400, 20, 291], [10600, 19, 290], [10800, 18, 288], [11000, 18, 286], [11200, 17, 282], [11400, 16, 276]],
        4: [[8800, 39, 398], [9000, 38, 400], [9200, 37, 401], [9400, 36, 403], [9600, 36, 404], [9800, 35, 406], [10000, 34, 407], [10200, 33, 408], [10400, 33, 409], [10600, 32, 411], [10800, 31, 412], [11000, 30, 413], [11200, 30, 414], [11400, 29, 414], [11600, 29, 415], [11800, 28, 416], [12000, 27, 416], [12200, 27, 417], [12400, 26, 417], [12600, 26, 417], [12800, 25, 417], [13000, 24, 417], [13200, 24, 416], [13400, 23, 415], [13600, 23, 414], [13800, 22, 413], [14000, 22, 411], [14200, 21, 409], [14400, 20, 407], [14600, 20, 403], [14800, 19, 399], [15000, 18, 393], [15200, 17, 385]],
        5: [[10600, 44, 520], [10800, 43, 522], [11000, 42, 523], [11200, 41, 524], [11400, 40, 525], [11600, 39, 526], [11800, 39, 527], [12000, 38, 528], [12200, 37, 529], [12400, 37, 530], [12600, 36, 530], [12800, 35, 531], [13000, 35, 532], [13200, 34, 533], [13400, 33, 533], [13600, 33, 534], [13800, 32, 534], [14000, 32, 534], [14200, 31, 535], [14400, 30, 535], [14600, 30, 535], [14800, 29, 535], [15000, 29, 535], [15200, 28, 534], [15400, 28, 534], [15600, 27, 533], [15800, 27, 533], [16000, 26, 532], [16200, 26, 531], [16400, 25, 529], [16600, 25, 528], [16800, 24, 526], [17000, 24, 524], [17200, 23, 522]]
    }
};

const SHELL_LABELS = {
    M107: 'M107 HE',
    'M107-AB': 'M107 Airburst',
    'M116-WP': 'M116 Smoke',
    'M485A2': 'M485A2 Illum'
};

// ขีดจำกัดมุมยกของฐานปืนแต่ละแบบ (จากไฟล์เกม/mod: LimitsVert)
// มอร์ต้าร์ยิงโค้งสูงอย่างเดียว 45–85° ส่วน M777 เป็นปืนใหญ่ยกได้ 0–71.7°
// เว็บนี้คำนวณเฉพาะวิถีโค้งสูง จึงใช้ช่วง 45° ถึงมุมสูงสุดของปืนนั้น
const ELEV_LIMITS = {
    original: { min: 45, max: 85 },
    mod: { min: 45, max: 85 },
    m777: { min: 45, max: 71.7 }
};

const SHELL_PHYSICS = {
    original: {
        M821: { k: 0.000113793, rings: { 0: 66.00, 1: 101.07, 2: 137.64, 3: 167.74, 4: 196.52 } },
        M819: { k: 0.000188433, rings: { 1: 91.26, 2: 131.41, 3: 162.24, 4: 190.06 } },
        M853A1: { k: 0.000372000, rings: { 1: 97.00, 2: 152.03, 3: 194.71, 4: 242.49 } },
        '0-832Ay': { k: 0.000198387, rings: { 0: 76.02, 1: 100.42, 2: 131.96, 3: 158.64, 4: 186.62 } },
        'A-832AY': { k: 0.000188218, rings: { 0: 71.01, 1: 95.09, 2: 124.13, 3: 148.14 } },
        'C-832C': { k: 0.000523077, rings: { 1: 88.66, 2: 141.13, 3: 191.95, 4: 273.18 } }
    },
    // MOD Adult Mortars ใช้กระสุนตัวเดียวกับเกม (ค่า drag เท่ากัน) เปลี่ยนแค่แรงส่งของแต่ละ ring
    mod: {
        M821: { k: 0.000113793, rings: { 0: 65.89, 1: 149.47, 2: 211.38, 3: 267.81, 4: 327.49 } },
        M819: { k: 0.000188433, rings: { 1: 136.81, 2: 209.80, 3: 275.91, 4: 344.51 } },
        M853A1: { k: 0.000372000, rings: { 1: 151.65, 2: 292.13, 3: 476.72, 4: 692.67 } },
        '0-832Ay': { k: 0.000198387, rings: { 0: 75.87, 1: 136.23, 2: 185.35, 3: 230.80, 4: 282.99 } },
        'A-832AY': { k: 0.000188218, rings: { 0: 70.88, 1: 128.05, 2: 172.12, 3: 211.33 } },  // mod นับ ring 0-3 ตามไฟล์ Ammo_Shell_82mm_Smoke_D832DU.et
        'C-832C': { k: 0.000523077, rings: { 1: 126.67, 2: 228.71, 3: 360.35, 4: 647.66 } }
    },
    // MOD M777 Howitzer 155mm — กระสุน M107 HE (M107_Shell_155MM_HE.et)
    // InitSpeed 100, Mass 43, AirDrag 0.0022 -> k = 5.11628e-5
    // ประจุ 5 ระดับจาก m_aChargeRingConfig: ring 1-5 = ค่าคูณ 2.4 / 3.1 / 4.4 / 5.6 / 6.84
    m777: {
        M107: { k: 0.0000511628, rings: { 1: 240, 2: 310, 3: 440, 4: 560, 5: 684 } }
    }
};

// M777 มีกระสุน 4 ชนิดให้เลือกในเกม แต่ในไฟล์ mod มีแค่ M107 HE ที่มีข้อมูลจริง
// อีก 3 ชนิด (airburst / ควัน / ส่องสว่าง) สืบทอดมาจาก M107 HE โดยไม่แก้ค่าฟิสิกส์อะไรเลย
// จึงใช้ตารางยิงและค่าฟิสิกส์ชุดเดียวกันทั้งหมด — ต่างกันแค่หัวกระสุนตอนระเบิด
const M777_SHELL_ALIASES = ['M107-AB', 'M116-WP', 'M485A2'];
M777_SHELL_ALIASES.forEach(name => {
    SHELL_PHYSICS.m777[name] = SHELL_PHYSICS.m777.M107;
    BALLISTIC_DATA.m777[name] = BALLISTIC_DATA.m777.M107;
    WIND_DATA_M777[name] = WIND_DATA_M777.M107;
});

const BALLISTIC_SIM = {
    G: 9.81,
    MIN_ELEV_DEG: 45,      // ต่ำกว่านี้เป็นวิถีราบ (มอร์ต้าร์ยิงโค้งสูง)
    MAX_ELEV_DEG: 85,      // ขีดจำกัดของฐานปืนในเกม (Mortar_Base.et: LimitsVert 45 85)

    // จำลองการยิง 1 นัด: x = ตามแนวยิง, y = สูง, z = ด้านข้าง (+ = ขวา)
    // wind = { along: ลมตามแนวยิง (+ = ลมส่งท้าย), cross: ลมขวาง (+ = พัดไปทางขวา) }
    // path (ถ้าส่งมา) = อาร์เรย์ที่จะถูกเติมจุด [ระยะ, ความสูง] ตลอดวิถี สำหรับวาดกราฟ
    shoot(v0, k, elevDeg, targetHeight, wind, dt, path) {
        dt = dt || 0.01;
        const g = this.G;
        const th = elevDeg * Math.PI / 180;
        const wx = wind ? wind.along : 0;
        const wz = wind ? wind.cross : 0;

        let x = 0, y = 0, z = 0;
        let vx = v0 * Math.cos(th), vy = v0 * Math.sin(th), vz = 0, t = 0;
        let px = 0, py = 0, pz = 0, pt = 0;

        const ax = (vx, vy, vz, o) => {
            const rx = vx - wx, ry = vy, rz = vz - wz;   // ความเร็วเทียบอากาศ
            const sp = Math.sqrt(rx * rx + ry * ry + rz * rz);
            o[0] = -k * sp * rx;
            o[1] = -g - k * sp * ry;
            o[2] = -k * sp * rz;
        };
        const a1 = [0, 0, 0], a2 = [0, 0, 0], a3 = [0, 0, 0], a4 = [0, 0, 0];

        for (let i = 0; i < 60000; i++) {
            px = x; py = y; pz = z; pt = t;
            ax(vx, vy, vz, a1);
            ax(vx + a1[0] * dt / 2, vy + a1[1] * dt / 2, vz + a1[2] * dt / 2, a2);
            ax(vx + a2[0] * dt / 2, vy + a2[1] * dt / 2, vz + a2[2] * dt / 2, a3);
            ax(vx + a3[0] * dt, vy + a3[1] * dt, vz + a3[2] * dt, a4);
            x += dt * (vx + (dt / 6) * (a1[0] + a2[0] + a3[0]));
            y += dt * (vy + (dt / 6) * (a1[1] + a2[1] + a3[1]));
            z += dt * (vz + (dt / 6) * (a1[2] + a2[2] + a3[2]));
            vx += (dt / 6) * (a1[0] + 2 * a2[0] + 2 * a3[0] + a4[0]);
            vy += (dt / 6) * (a1[1] + 2 * a2[1] + 2 * a3[1] + a4[1]);
            vz += (dt / 6) * (a1[2] + 2 * a2[2] + 2 * a3[2] + a4[2]);
            t += dt;
            if (path) path.push([x, y, t]);   // [ระยะ, ความสูง, เวลา]

            // ตัดผ่านความสูงเป้าหมายตอนขาลง — ต้องเคยอยู่ "เหนือ" เป้าหมายก่อน
            // (ถ้าวิถีขึ้นไม่ถึงความสูงเป้าหมายเลย ต้องถือว่ายิงไม่ถึง ไม่ใช่ตกที่จุดสูงสุด)
            if (vy < 0 && py > targetHeight && y <= targetHeight) {
                const f = (py - y) !== 0 ? (py - targetHeight) / (py - y) : 0;
                const hitX = px + (x - px) * f;
                const hitT = pt + (t - pt) * f;
                if (path) { path.pop(); path.push([hitX, targetHeight, hitT]); }
                return {
                    range: hitX,
                    drift: pz + (z - pz) * f,
                    time: pt + (t - pt) * f,
                    impactAngle: Math.atan2(-vy, Math.sqrt(vx * vx + vz * vz)) * 180 / Math.PI
                };
            }
            if (t > 180) break;
        }
        return null;
    },

    // หามุมยกที่ทำให้กระสุนตกที่ระยะ range และความสูงต่าง heightDiff
    //
    // สำคัญ: "ระยะไกลสุด" ไม่ได้อยู่ที่มุม 45° เสมอไป
    // เมื่อเป้าหมายอยู่สูงกว่าปืน มุมที่ยิงได้ไกลสุดจะขยับสูงขึ้นกว่า 45° (และที่ 45° อาจยิงขึ้นไป
    // ไม่ถึงระดับเป้าหมายเลยด้วยซ้ำ) ถ้าเดาว่าจุดยอดอยู่ที่ 45° จะสรุปผิดว่า "ยิงไม่ถึง"
    // ทั้งที่มุมสูงกว่านั้นยิงถึงได้ จึงต้องกวาดหาจุดยอดจริงก่อน แล้วค่อยแบ่งครึ่งช่วงบนกิ่งขาลง
    solve(v0, k, range, heightDiff, wind, limits) {
        // ขีดจำกัดมุมยกต่างกันตามฐานปืน (มอร์ต้าร์ 45-85, M777 45-71.7)
        const MIN = (limits && limits.min) || this.MIN_ELEV_DEG;
        const MAX = (limits && limits.max) || this.MAX_ELEV_DEG;
        const SCAN_DT = 0.02;                       // ก้าวหยาบสำหรับค้นหา (RK4 แม่นพอ)
        const at = (deg, dt) => {
            const r = this.shoot(v0, k, deg, heightDiff, wind, dt || SCAN_DT);
            return r ? r.range : -1;
        };

        let peakDeg = MIN;
        let peakRange = at(MIN);

        if (heightDiff > 0) {
            // กวาดหยาบทีละ 3° แล้วขยับละเอียดรอบจุดยอด
            for (let d = MIN + 3; d <= MAX; d += 3) {
                const r = at(d);
                if (r > peakRange) { peakRange = r; peakDeg = d; }
            }
            // ลูปข้างบนก้าวทีละ 3° จึงไม่ตกที่ 85° พอดี ต้องลองมุมสูงสุดแยก
            // (เมื่อเป้าสูงมาก ช่วงมุมที่ยิงถึงอาจแคบและอยู่ชิด 85° เท่านั้น)
            const rTop = at(MAX);
            if (rTop > peakRange) { peakRange = rTop; peakDeg = MAX; }

            for (let step = 1.5; step >= 0.05; step /= 2) {
                for (const d of [peakDeg - step, peakDeg + step]) {
                    if (d < MIN || d > MAX) continue;
                    const r = at(d);
                    if (r > peakRange) { peakRange = r; peakDeg = d; }
                }
            }
            // ห้ามขยับ peakDeg ออกจากจุดที่วัดค่าไว้ (เคยถอยลง 0.2° แล้วหลุดออกนอกช่วงที่ยิงถึง
            // ทำให้ at() คืน -1 แล้วสรุปผิดว่า "ยิงไม่ถึง" ทั้งที่มีมุมที่ยิงได้)
            // peakDeg กับ peakRange ต้องเป็นคู่เดียวกันเสมอ: peakRange === at(peakDeg)
            //
            // ถ้าจุดยอดที่หาได้อยู่ก่อนจุดยอดจริงเล็กน้อยก็ยังปลอดภัย เพราะเราปฏิเสธกรณี
            // range > peakRange ไปแล้ว ช่วงขาขึ้นที่เหลือจึงมีระยะ >= range ทุกจุด
            // การแบ่งครึ่งช่วงจะไล่ lo ขึ้นไปผ่านจุดยอดเองแล้วไปเจอคำตอบบนขาลง
        }

        if (peakRange < range) return { error: 'range', maxRange: peakRange > 0 ? peakRange : 0 };
        const rTop = at(MAX);
        if (rTop > range) return { error: 'tooClose', minRange: rTop };

        // กิ่งขาลง: จาก peakDeg (ระยะมากสุด) ถึง MAX_ELEV_DEG (ระยะน้อยสุด) ระยะลดลงต่อเนื่อง
        let lo = peakDeg, hi = MAX;
        for (let i = 0; i < 20; i++) {      // 20 รอบให้ความละเอียดราว 0.00004° ซึ่งเกินพอ
            const mid = (lo + hi) / 2;
            if (at(mid) > range) lo = mid; else hi = mid;
        }
        const deg = (lo + hi) / 2;
        const res = this.shoot(v0, k, deg, heightDiff, wind, 0.005);
        if (!res) return { error: 'sim' };
        const rMax = peakRange;
        return {
            elevationDeg: deg,
            timeOfFlight: res.time,
            impactAngle: res.impactAngle,
            drift: res.drift,
            maxRange: rMax
        };
    }
};

// คลาสหลักสำหรับการคำนวณมอร์ต้าร์ในเกม ARMA REFORGER
// ใช้ข้อมูลจาก BALLISTIC_DATA เป็นหลักในการคำนวณวิถีกระสุน
// รวมถึงการชดเชยมุมยกปืนจากความแตกต่างของระดับความสูง
class MortarCalculator {
    constructor() {
        this.currentMortarType = 'original';  // ประเภทมอร์ต้าร์ (original หรือ mod)
        this.currentShell = 'M821';           // ประเภทกระสุน
        this.currentCharge = 0;               // ระดับประจุ (Charge)
        this.targetPresets = {};              // เก็บข้อมูลเป้าหมายที่บันทึกไว้
        this.elevationOffset = 0;             // ค่าออฟเซ็ตมุมยกปืน (mils)

        // ACE Weather: state & defaults (persisted)
        const savedAce = localStorage.getItem('enableAceWeather');
        this.enableAceWeather = savedAce === '1' ? true : false; // default OFF

        // Weather inputs (defaults with persistence)
        this.weather = {
            windSpeed: parseFloat(localStorage.getItem('aceWindSpeed') || '0'), // m/s
            windDirFrom: parseFloat(localStorage.getItem('aceWindDirFrom') || '0'), // deg (from North)
            temperatureC: parseFloat(localStorage.getItem('aceTempC') || '15'),
            pressureHpa: parseFloat(localStorage.getItem('acePressure') || '1013'),
            humidity: parseFloat(localStorage.getItem('aceHumidity') || '50') // %
        };

        // ลมในเกม (native wind) — ค่าเริ่มต้น จะถูกโหลดจริงใน initWindWidget()
        this.gameWind = { speed: 0, dirFrom: 0 };
        this.lastWindAdjust = null;

        // เปิดโหมดคำนวณขั้นสูงทุกครั้งที่เข้าหน้าเว็บ (ไม่จำสถานะที่ปิดไว้)
        // เพราะเป็นโหมดที่แม่นกว่า คนที่เคยปิดไว้ไม่ควรติดค่าเก่าข้ามวัน
        this.enableAdvanced = true;

        this.initializeElements();
        this.initWindWidget();
        this.initAdvancedPanel();
        this.bindEvents();
        this.loadInitialData();
        this.loadTargetPresets();
    }

    initializeElements() {
        // Grid coordinate input elements
        this.weaponX = document.getElementById('weapon-x');
        this.weaponY = document.getElementById('weapon-y');
        this.weaponAlt = document.getElementById('weapon-alt');
        this.targetX = document.getElementById('target-x');
        this.targetY = document.getElementById('target-y');
        this.targetAlt = document.getElementById('target-alt');

        // Grid display elements
        this.weaponGridRef = document.getElementById('weapon-grid-ref');
        this.targetGridRef = document.getElementById('target-grid-ref');

        // Control elements
        this.calculateBtn = document.getElementById('calculate-btn');
        this.resultsSection = document.getElementById('results-section');
        this.mortarTypeInputs = document.querySelectorAll('input[name="mortar-type"]');
        this.shellButtonsEl = document.getElementById('shell-buttons');
        this.shellButtons = [];   // สร้างขึ้นใหม่ทุกครั้งที่เปลี่ยนประเภทปืน (renderShellButtons)

        // Results elements
        this.distanceEl = document.getElementById('distance');
        this.azimuthEl = document.getElementById('azimuth');
        this.elevationEl = document.getElementById('elevation');
        this.chargeEl = document.getElementById('charge');
        this.timeFlightEl = document.getElementById('time-flight');
        this.heightDiffEl = document.getElementById('height-diff');

        // Table elements
        this.chargeTabsEl = document.getElementById('charge-tabs');
        this.ballisticTbody = document.getElementById('ballistic-tbody');

        // RING elements
        this.ringSection = document.getElementById('ring-section');
        this.calculateRingsBtn = document.getElementById('calculate-rings-btn');
        this.ringResults = document.getElementById('ring-results');

        // Preset elements
        this.presetButtons = document.querySelectorAll('.preset-btn');

        // Numpad elements
        this.numpadButtons = document.querySelectorAll('.numpad-btn');

        // Offset elements
        this.offsetButtons = document.querySelectorAll('.offset-btn');
        this.currentOffsetValue = document.getElementById('current-offset-value');
        this.mortarTypeBadge = document.getElementById('mortar-type-badge');
        this.fixedMortarTypeBadge = document.getElementById('fixed-mortar-type-badge');

        // Apply 5-digit restriction to coordinate inputs
        this.restrictToFiveDigits(this.weaponX);
        this.restrictToFiveDigits(this.weaponY);
        this.restrictToFiveDigits(this.targetX);
        this.restrictToFiveDigits(this.targetY);
    }

    bindEvents() {
        // Calculate button
        this.calculateBtn.addEventListener('click', () => this.calculate());

        // RING calculate button
        this.calculateRingsBtn.addEventListener('click', () => this.calculateAvailableRings());

        // Real-time calculation and grid display update
        [this.weaponX, this.weaponY, this.weaponAlt,
        this.targetX, this.targetY, this.targetAlt].forEach(input => {
            input.addEventListener('input', () => {
                // Reset manual ring selection when inputs change
                this.manualRingSelected = false;

                this.updateGridReferences();
                // Check and update active preset status for target inputs only
                if (input === this.targetX || input === this.targetY || input === this.targetAlt) {
                    this.updateActivePresetStatus();
                }
                // Update numpad highlight when target coordinates change
                if (input === this.targetX || input === this.targetY) {
                    this.updateNumpadHighlight();
                }
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
        });

        // Mortar type selection
        this.mortarTypeInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentMortarType = e.target.value;

                // ปุ่มกระสุนของแต่ละประเภทปืนไม่เหมือนกัน (มอร์ต้าร์ vs ปืนใหญ่ M777)
                // จึงต้องสร้างปุ่มใหม่ และเปลี่ยนกระสุนที่เลือกถ้าของเดิมไม่มีในประเภทนี้
                this.renderShellButtons();

                this.updateMortarTypeBadge();
                this.createChargeTabs(); // Recreate charge tabs (this will reset currentCharge)
                this.loadBallisticData();
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
        });

        // Target preset buttons
        this.presetButtons.forEach(btn => {
            if (btn.dataset.preset === 'clear') {
                // Clear button
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.clearTargetData();
                });
            } else {
                // Regular preset buttons
                const presetNumber = parseInt(btn.dataset.preset);

                // Touch/Mobile support variables
                let touchStartTime = 0;
                let touchTimer = null;
                let isLongPress = false;

                // Touch start (mobile)
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    touchStartTime = Date.now();
                    isLongPress = false;

                    // Add visual feedback for touch
                    btn.style.transform = 'scale(0.95)';

                    // Set timer for long press (500ms)
                    touchTimer = setTimeout(() => {
                        isLongPress = true;
                        // Vibrate if supported (mobile feedback)
                        if (navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                        // Visual feedback for long press
                        btn.style.background = 'rgba(34, 197, 94, 0.4)';
                        btn.style.borderColor = '#22c55e';

                        // Save preset
                        this.saveTargetPreset(presetNumber);
                    }, 500);
                });

                // Touch end (mobile)
                btn.addEventListener('touchend', (e) => {
                    e.preventDefault();

                    // Reset visual feedback
                    btn.style.transform = '';
                    btn.style.background = '';
                    btn.style.borderColor = '';

                    // Clear timer
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                    }

                    // If it was a short tap (not long press), load preset
                    if (!isLongPress && (Date.now() - touchStartTime < 500)) {
                        this.loadTargetPreset(presetNumber);
                    }
                });

                // Touch cancel (mobile)
                btn.addEventListener('touchcancel', (e) => {
                    // Reset everything if touch is cancelled
                    btn.style.transform = '';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                    }
                });

                // Desktop support (existing functionality)
                // Left click: Load preset
                btn.addEventListener('click', (e) => {
                    // Only handle if not on touch device or if touch events didn't handle it
                    if (!('ontouchstart' in window)) {
                        e.preventDefault();
                        this.loadTargetPreset(presetNumber);
                    }
                });

                // Right click: Save preset (desktop only)
                btn.addEventListener('contextmenu', (e) => {
                    if (!('ontouchstart' in window)) {
                        e.preventDefault();
                        this.saveTargetPreset(presetNumber);
                    }
                });
            }
        });

        // Numpad Reference buttons
        this.numpadButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const numpadValue = parseInt(btn.dataset.numpad);
                this.applyNumpadReference(numpadValue);
            });
        });

        // Elevation Offset buttons
        this.offsetButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const offsetValue = btn.dataset.offset;
                this.applyElevationOffset(offsetValue);
            });
        });

        // Coordinate Guide Toggle
        const guideToggle = document.querySelector('.guide-toggle');
        const guideContent = document.getElementById('guide-content');
        if (guideToggle && guideContent) {
            guideToggle.addEventListener('click', () => {
                guideContent.classList.toggle('show');
            });
        }
    }

    loadInitialData() {
        this.renderShellButtons(); // Build shell buttons for the selected mortar type
        this.updateShellInfo(); // Initialize shell info
        this.updateMortarTypeBadge(); // Initialize mortar type badge
        this.createChargeTabs();
        this.loadBallisticData();
        this.updateGridReferences();
        this.updateNumpadHighlight(); // Initialize numpad highlighting
        this.updateOffsetDisplay(); // Initialize offset display
        this.renderRingPickers(); // Initialize charge/ring pickers
        this.setupDeviceSpecificUI();

        // Initialize ACE Weather UI (toggle default OFF)
        this.createAceWeatherUI();
    }

    // =============== ACE Weather UI ==================
    createAceWeatherUI() {
        // Avoid duplicate rendering
        if (document.getElementById('ace-weather-panel')) {
            this.updateAceWeatherUILanguage();
            this.syncAceWeatherInputs();
            return;
        }

        // Anchor: BELOW Input Section, RIGHT ABOVE the Calculate button
        const mainEl = document.querySelector('main');
        let anchor = mainEl || document.body;
        const calcBtn = this.calculateBtn;

        const panel = document.createElement('div');
        panel.id = 'ace-weather-panel';
        Object.assign(panel.style, {
            marginTop: '10px',
            padding: '12px',
            background: 'rgba(48,54,61,0.25)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '8px'
        });

        // Header with toggle
        const header = document.createElement('div');
        Object.assign(header.style, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '8px'
        });

        const title = document.createElement('div');
        title.id = 'ace-weather-title';
        title.textContent = '🌦️ ACE Weather';
        Object.assign(title.style, { fontWeight: '700' });

        const toggleLabel = document.createElement('label');
        Object.assign(toggleLabel.style, { display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' });
        const toggle = document.createElement('input');
        toggle.type = 'checkbox';
        toggle.id = 'ace-weather-toggle';
        toggle.checked = !!this.enableAceWeather;
        const toggleText = document.createElement('span');
        toggleText.id = 'ace-weather-toggle-text';
        toggleLabel.appendChild(toggle);
        toggleLabel.appendChild(toggleText);

        header.appendChild(title);
        header.appendChild(toggleLabel);

        // Inputs grid
        const grid = document.createElement('div');
        Object.assign(grid.style, {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
            width: '100%'
        });

        const makeGroup = (id, labelText, type = 'number', attrs = {}) => {
            const wrap = document.createElement('div');
            const lab = document.createElement('label');
            lab.id = `${id}-label`;
            lab.textContent = labelText;
            lab.style.display = 'block';
            lab.style.fontSize = '12px';
            lab.style.opacity = '0.9';
            const input = document.createElement('input');
            input.type = type;
            input.id = id;
            Object.assign(input, attrs);
            Object.assign(input.style, { width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #444', background: '#111', color: '#eee' });
            wrap.appendChild(lab);
            wrap.appendChild(input);
            return { wrap, input };
        };

        const g1 = makeGroup('ace-wind-speed', 'Wind Speed (m/s)', 'number', { step: '0.1', min: '0' });
        const g2 = makeGroup('ace-wind-dir', 'Wind Dir FROM (°)', 'number', { step: '1', min: '0', max: '360' });
        const g3 = makeGroup('ace-temp', 'Temperature (°C)', 'number', { step: '0.1' });
        const g4 = makeGroup('ace-pressure', 'Pressure (hPa)', 'number', { step: '1', min: '800', max: '1100' });
        const g5 = makeGroup('ace-humidity', 'Humidity (%)', 'number', { step: '1', min: '0', max: '100' });

        grid.appendChild(g1.wrap);
        grid.appendChild(g2.wrap);
        grid.appendChild(g3.wrap);
        grid.appendChild(g4.wrap);
        grid.appendChild(g5.wrap);

        // Info line
        const info = document.createElement('div');
        info.id = 'ace-weather-info';
        Object.assign(info.style, { marginTop: '6px', fontSize: '12px', opacity: '0.85' });

        panel.appendChild(header);
        panel.appendChild(grid);
        panel.appendChild(info);
        // Insert the panel right BEFORE the Calculate button so it's below target card
        if (calcBtn && calcBtn.parentNode === anchor) {
            anchor.insertBefore(panel, calcBtn);
        } else {
            anchor.appendChild(panel);
        }

        // Save refs
        this.aceInputs = {
            windSpeed: g1.input,
            windDirFrom: g2.input,
            temp: g3.input,
            pressure: g4.input,
            humidity: g5.input,
            toggle,
            info
        };

        // Seed values
        this.syncAceWeatherInputs();
        this.updateAceWeatherUILanguage();
        this.setAceInputsEnabled(this.enableAceWeather);
        // Initial responsive columns
        this.setAceGridColumns(grid);

        // Events
        toggle.addEventListener('change', () => {
            this.enableAceWeather = toggle.checked;
            localStorage.setItem('enableAceWeather', this.enableAceWeather ? '1' : '0');
            this.updateAceWeatherUILanguage();
            this.setAceInputsEnabled(this.enableAceWeather);
            if (this.validateInputs()) this.calculate();
            const status = this.enableAceWeather ? this._tOn() : this._tOff();
            this.showMessage(`${this._tAceWeather()}: ${status}`, 'success');
        });

        const onInputChange = () => {
            this.weather.windSpeed = parseFloat(this.aceInputs.windSpeed.value || '0');
            this.weather.windDirFrom = parseFloat(this.aceInputs.windDirFrom.value || '0');
            this.weather.temperatureC = parseFloat(this.aceInputs.temp.value || '15');
            this.weather.pressureHpa = parseFloat(this.aceInputs.pressure.value || '1013');
            this.weather.humidity = parseFloat(this.aceInputs.humidity.value || '50');
            // persist
            localStorage.setItem('aceWindSpeed', String(this.weather.windSpeed));
            localStorage.setItem('aceWindDirFrom', String(this.weather.windDirFrom));
            localStorage.setItem('aceTempC', String(this.weather.temperatureC));
            localStorage.setItem('acePressure', String(this.weather.pressureHpa));
            localStorage.setItem('aceHumidity', String(this.weather.humidity));
            if (this.enableAceWeather && this.validateInputs()) this.calculate();
        };

        [g1.input, g2.input, g3.input, g4.input, g5.input].forEach(inp => {
            inp.addEventListener('input', onInputChange);
            inp.addEventListener('change', onInputChange);
        });

        // Handle responsive on resize/orientation change
        const resizeHandler = () => this.setAceGridColumns(grid);
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', resizeHandler);
    }

    // Responsive columns for ACE grid (mobile-friendly)
    setAceGridColumns(gridEl) {
        if (!gridEl) return;
        const w = window.innerWidth || document.documentElement.clientWidth;
        if (w <= 420) {
            gridEl.style.gridTemplateColumns = 'repeat(1, minmax(0, 1fr))';
        } else if (w <= 640) {
            gridEl.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
        } else if (w <= 900) {
            gridEl.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
        } else if (w <= 1200) {
            gridEl.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
        } else {
            gridEl.style.gridTemplateColumns = 'repeat(5, minmax(0, 1fr))';
        }
    }

    setAceInputsEnabled(enabled) {
        if (!this.aceInputs) return;
        const fields = [this.aceInputs.windSpeed, this.aceInputs.windDirFrom, this.aceInputs.temp, this.aceInputs.pressure, this.aceInputs.humidity];
        fields.forEach(el => { el.disabled = !enabled; el.style.opacity = enabled ? '1' : '0.6'; });
        this.aceInputs.info.style.display = enabled ? 'block' : 'none';
    }

    syncAceWeatherInputs() {
        if (!this.aceInputs) return;
        this.aceInputs.windSpeed.value = isFinite(this.weather.windSpeed) ? this.weather.windSpeed : 0;
        this.aceInputs.windDirFrom.value = isFinite(this.weather.windDirFrom) ? this.weather.windDirFrom : 0;
        this.aceInputs.temp.value = isFinite(this.weather.temperatureC) ? this.weather.temperatureC : 15;
        this.aceInputs.pressure.value = isFinite(this.weather.pressureHpa) ? this.weather.pressureHpa : 1013;
        this.aceInputs.humidity.value = isFinite(this.weather.humidity) ? this.weather.humidity : 50;
        this.aceInputs.toggle.checked = !!this.enableAceWeather;
    }

    updateAceWeatherUILanguage() {
        if (!this.aceInputs) return;
        const title = document.getElementById('ace-weather-title');
        const toggleText = document.getElementById('ace-weather-toggle-text');
        const windSpeedLabel = document.getElementById('ace-wind-speed-label');
        const windDirLabel = document.getElementById('ace-wind-dir-label');
        const tempLabel = document.getElementById('ace-temp-label');
        const pressureLabel = document.getElementById('ace-pressure-label');
        const humidityLabel = document.getElementById('ace-humidity-label');

        // Fallback: get from inputs' previous sibling
        const setLabel = (id, text) => {
            const lab = document.getElementById(id);
            if (lab) lab.textContent = text;
        };

        if (title) title.textContent = this._tAceWeather();
        if (toggleText) toggleText.textContent = `${this.enableAceWeather ? this._tOn() : this._tOff()}`;
        setLabel('ace-wind-speed-label', this._t('windSpeed'));
        setLabel('ace-wind-dir-label', this._t('windFrom'));
        setLabel('ace-temp-label', this._t('temperature'));
        setLabel('ace-pressure-label', this._t('pressure'));
        setLabel('ace-humidity-label', this._t('humidity'));
    }

    // Small i18n helpers
    _tAceWeather() { return currentLanguage === 'th' ? '🌦️ ACE Weather' : '🌦️ ACE Weather'; }
    _tOn() { return currentLanguage === 'th' ? 'เปิด' : 'On'; }
    _tOff() { return currentLanguage === 'th' ? 'ปิด' : 'Off'; }
    _t(key) {
        const map = {
            windSpeed: currentLanguage === 'th' ? 'ความเร็วลม (ม./วิ)' : 'Wind Speed (m/s)',
            windFrom: currentLanguage === 'th' ? 'ทิศลมพัดมาจาก (°)' : 'Wind Dir FROM (°)',
            temperature: currentLanguage === 'th' ? 'อุณหภูมิ (°C)' : 'Temperature (°C)',
            pressure: currentLanguage === 'th' ? 'ความกดอากาศ (hPa)' : 'Pressure (hPa)',
            humidity: currentLanguage === 'th' ? 'ความชื้น (%)' : 'Humidity (%)'
        };
        return map[key] || key;
    }

    // =============== ACE Weather math ==================
    // Compute air density (kg/m^3) using simplified moist air formula
    computeAirDensity(tempC, pressureHpa, humidityPct) {
        const T = tempC + 273.15; // K
        const p = pressureHpa * 100; // Pa
        const RH = Math.max(0, Math.min(100, humidityPct)) / 100; // 0..1
        // Tetens saturation vapor pressure (hPa)
        const es = 6.112 * Math.exp((17.67 * tempC) / (tempC + 243.5)); // hPa
        const pv = RH * es * 100; // Pa
        const pd = p - pv; // dry air partial pressure
        const Rd = 287.058; // J/(kg·K)
        const Rv = 461.495; // J/(kg·K)
        const rho = pd / (Rd * T) + pv / (Rv * T);
        return rho; // ~1.2 kg/m^3 at standard
    }

    // Calculate weather-based adjustments given range & azimuth (deg)
    applyAceWeatherAdjustments(rangeMeters, azimuthDeg) {
        const ws = Math.max(0, this.weather.windSpeed || 0); // m/s
        const fromDeg = ((this.weather.windDirFrom || 0) % 360 + 360) % 360;
        // Convert wind FROM to TO direction
        const windTo = (fromDeg + 180) % 360;
        const delta = (windTo - azimuthDeg + 540) % 360 - 180; // -180..180
        const rad = delta * Math.PI / 180;
        const headwind = ws * Math.cos(rad);   // +ve tail-to-target direction
        const crosswind = ws * Math.sin(rad);  // +ve -> push to the right of shot line

        // Simple coefficients per km
        const distKm = rangeMeters / 1000;
        const kRange = 5; // meters per (m/s * km)
        const kDeflect = 1.0; // mils per (m/s * km)

        // Air density effect (relative to ISA 1.225)
        // ใช้ isFinite ไม่ใช่ `|| ค่าเริ่มต้น` เพราะอุณหภูมิ 0 °C และความชื้น 0 % เป็นค่าที่ถูกต้อง
        // แต่ JS มองว่าเป็นเท็จ จะถูกแทนที่ด้วย 15 °C / 50 % ทั้งที่ผู้ใช้กรอก 0 ไว้
        const num = (v, def) => (Number.isFinite(v) ? v : def);
        const rho = this.computeAirDensity(num(this.weather.temperatureC, 15), num(this.weather.pressureHpa, 1013), num(this.weather.humidity, 50));
        const rho0 = 1.225;
        const densityRatioDelta = (rho - rho0) / rho0; // typically small
        const kElev = 8; // mils per (unit ratio * km)

        const deltaRange = -kRange * headwind * distKm; // headwind reduces range
        const deflectionMils = kDeflect * crosswind * distKm; // +mils => right
        const deltaElevMils = kElev * densityRatioDelta * distKm; // + => higher density -> more drag -> need more elevation

        return {
            headwind, crosswind, deltaRange, deflectionMils, deltaElevMils,
            rho, densityRatioDelta
        };
    }

    // =============== Native In-game Wind (ลมในเกม — คำนวณแบบ arma-mortar.com) ==================
    initWindWidget() {
        this.windSection = document.getElementById('wind-widget-box');
        this.windDirDial = document.getElementById('wind-dir-dial');
        this.windSpeedDial = document.getElementById('wind-speed-dial');
        this.windDirInput = document.getElementById('wind-dir-input');
        this.windSpeedInput = document.getElementById('wind-speed-input');
        this.windStatusEl = document.getElementById('wind-status');
        if (!this.windDirDial || !this.windSpeedDial) return;

        // เข้าหน้าเว็บใหม่เริ่มที่ลม 0 เสมอ (ไม่จำค่าจากครั้งก่อน)
        // ลมในเกมเปลี่ยนตลอด ถ้าจำค่าเก่าไว้จะกลายเป็นชดเชยผิดโดยที่ผู้เล่นไม่รู้ตัว
        this.gameWind = { speed: 0, dirFrom: 0 };
        this.windDirInput.value = Math.round(this.gameWind.dirFrom);
        this.windSpeedInput.value = this.gameWind.speed;

        // สร้างหน้าปัด SVG
        this.buildWindDial(this.windDirDial, 'dir');
        this.buildWindDial(this.windSpeedDial, 'speed');
        this.renderWindDials();
        if (this.windSection) this.windSection.classList.toggle('wind-active', this.gameWind.speed > 0);

        // ลากหมุนหน้าปัดทิศลม (0° = เหนือ, ตามเข็มนาฬิกา)
        this.attachDialDrag(this.windDirDial, (angleDeg) => {
            this.setWindDir(Math.round(angleDeg));
        });
        // ลากหน้าปัดความเร็ว (1 รอบ = 20 m/s, ปัดทีละ 0.5)
        this.attachDialDrag(this.windSpeedDial, (angleDeg) => {
            const spd = Math.round((angleDeg / 360) * 20 * 2) / 2;
            this.setWindSpeed(spd);
        });

        // ช่องกรอกตัวเลข + ปุ่มปรับทีละขั้น
        this.windDirInput.addEventListener('change', () => this.setWindDir(parseFloat(this.windDirInput.value)));
        this.windSpeedInput.addEventListener('change', () => this.setWindSpeed(parseFloat(this.windSpeedInput.value)));
        document.querySelectorAll('[data-wind-dir-step]').forEach(btn => {
            btn.addEventListener('click', () => this.setWindDir(this.gameWind.dirFrom + parseFloat(btn.dataset.windDirStep)));
        });
        document.querySelectorAll('[data-wind-speed-step]').forEach(btn => {
            btn.addEventListener('click', () => this.setWindSpeed(this.gameWind.speed + parseFloat(btn.dataset.windSpeedStep)));
        });

        this.updateWindStatus();
    }

    buildWindDial(svg, kind) {
        const NS = 'http://www.w3.org/2000/svg';
        svg.innerHTML = '';

        // วงแหวนพื้นหลัง — ทิศ: สีอ่อนแบบเกจในเกม, ความเร็ว: สีเข้ม
        const track = document.createElementNS(NS, 'circle');
        track.setAttribute('cx', '60');
        track.setAttribute('cy', '60');
        track.setAttribute('r', '48');
        track.setAttribute('fill', 'none');
        track.setAttribute('stroke', kind === 'dir' ? '#d7dde3' : '#21262d');
        track.setAttribute('stroke-width', '12');
        svg.appendChild(track);

        // แถบส้ม (ทิศลม / ปริมาณความเร็ว)
        const arc = document.createElementNS(NS, 'path');
        arc.setAttribute('fill', 'none');
        arc.setAttribute('stroke', '#e8a33d');
        arc.setAttribute('stroke-width', '12');
        arc.setAttribute('stroke-linecap', 'round');
        svg.appendChild(arc);

        // ตัวอักษร N บอกทิศเหนือ (เฉพาะหน้าปัดทิศ) — วางในรูตรงกลาง ใต้ขอบวงด้านบน ไม่ให้ทับวงแหวน
        if (kind === 'dir') {
            const n = document.createElementNS(NS, 'text');
            n.setAttribute('x', '60');
            n.setAttribute('y', '31');
            n.setAttribute('text-anchor', 'middle');
            n.setAttribute('fill', '#8b949e');
            n.setAttribute('font-size', '9');
            n.setAttribute('font-weight', '700');
            n.textContent = 'N';
            svg.appendChild(n);
        }

        // ตัวเลขตรงกลาง
        const label = document.createElementNS(NS, 'text');
        label.setAttribute('x', '60');
        label.setAttribute('y', '62');
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('dominant-baseline', 'central');
        label.setAttribute('fill', '#e8a33d');
        label.setAttribute('font-size', '20');
        label.setAttribute('font-weight', '700');
        label.setAttribute('font-family', "'JetBrains Mono', 'Consolas', monospace");
        svg.appendChild(label);

        svg._arc = arc;
        svg._label = label;
    }

    // จุดบนวงกลม: มุมเป็นองศาจากทิศเหนือ ตามเข็มนาฬิกา
    _windPolar(cx, cy, r, angleDeg) {
        const a = (angleDeg - 90) * Math.PI / 180;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }

    _windArcPath(cx, cy, r, startDeg, endDeg) {
        const [sx, sy] = this._windPolar(cx, cy, r, startDeg);
        const [ex, ey] = this._windPolar(cx, cy, r, endDeg);
        const sweep = ((endDeg - startDeg) % 360 + 360) % 360;
        const large = sweep > 180 ? 1 : 0;
        return `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
    }

    renderWindDials() {
        if (!this.windDirDial || !this.windDirDial._arc) return;
        // หน้าปัดทิศ: แถบส้มกว้าง 40° ชี้ทิศที่ลมพัดมาจาก
        const dir = this.gameWind.dirFrom;
        this.windDirDial._arc.setAttribute('d', this._windArcPath(60, 60, 48, dir - 20, dir + 20));
        this.windDirDial._label.textContent = `${Math.round(dir)}°`;

        // หน้าปัดความเร็ว: แถบส้มยาวตามสัดส่วน (เต็มวง = 20 m/s)
        const spd = this.gameWind.speed;
        const frac = Math.max(0, Math.min(1, spd / 20));
        if (frac <= 0.002) {
            this.windSpeedDial._arc.removeAttribute('d');
        } else {
            this.windSpeedDial._arc.setAttribute('d', this._windArcPath(60, 60, 48, 0, frac * 359.9));
        }
        this.windSpeedDial._label.textContent = String(Math.round(spd * 10) / 10);
    }

    attachDialDrag(svg, onAngle) {
        const getAngle = (ev) => {
            const rect = svg.getBoundingClientRect();
            const dx = ev.clientX - (rect.left + rect.width / 2);
            const dy = ev.clientY - (rect.top + rect.height / 2);
            const deg = Math.atan2(dx, -dy) * 180 / Math.PI;
            return (deg % 360 + 360) % 360;
        };
        let dragging = false;
        svg.addEventListener('pointerdown', (ev) => {
            dragging = true;
            try { svg.setPointerCapture(ev.pointerId); } catch (e) { }
            onAngle(getAngle(ev));
            ev.preventDefault();
        });
        svg.addEventListener('pointermove', (ev) => {
            if (dragging) onAngle(getAngle(ev));
        });
        const stop = () => { dragging = false; };
        svg.addEventListener('pointerup', stop);
        svg.addEventListener('pointercancel', stop);
    }

    setWindDir(deg) {
        if (!isFinite(deg)) deg = 0;
        deg = ((Math.round(deg) % 360) + 360) % 360;
        this.gameWind.dirFrom = deg;
        if (this.windDirInput) this.windDirInput.value = deg;
        this.onWindChanged();
    }

    setWindSpeed(spd) {
        if (!isFinite(spd)) spd = 0;
        spd = Math.max(0, Math.min(30, Math.round(spd * 10) / 10));
        this.gameWind.speed = spd;
        if (this.windSpeedInput) this.windSpeedInput.value = spd;
        this.onWindChanged();
    }

    onWindChanged() {
        this.renderWindDials();
        if (this.windSection) this.windSection.classList.toggle('wind-active', this.gameWind.speed > 0);
        if (this.validateInputs()) {
            this.calculate(); // calculate() จะอัปเดตสถานะลมให้เอง
        } else {
            this.lastWindAdjust = null;
            this.updateWindStatus();
        }
    }

    // ตารางค่าแก้ลมของกระสุนปัจจุบัน (Original = ตารางเกม, MOD = ตารางจาก Adult Mortars v1.0.4)
    getWindTableForCurrentShell() {
        const source = { mod: WIND_DATA_MOD, m777: WIND_DATA_M777 }[this.currentMortarType] || WIND_DATA;
        return (source && source[this.currentShell]) || null;
    }

    // ประมาณค่า Zw (wc) / Xw (wl) เชิงเส้นตามระยะ
    interpolateWindRow(rows, distance) {
        if (!rows || rows.length === 0) return null;
        if (distance <= rows[0][0]) return { wc: rows[0][1], wl: rows[0][2] };
        const last = rows[rows.length - 1];
        if (distance >= last[0]) return { wc: last[1], wl: last[2] };
        for (let i = 0; i < rows.length - 1; i++) {
            const a = rows[i], b = rows[i + 1];
            if (distance >= a[0] && distance <= b[0]) {
                if (b[0] === a[0]) return { wc: a[1], wl: a[2] }; // กันแถวระยะซ้ำ (หารศูนย์)
                const t = (distance - a[0]) / (b[0] - a[0]);
                return { wc: a[1] + (b[1] - a[1]) * t, wl: a[2] + (b[2] - a[2]) * t };
            }
        }
        return { wc: last[1], wl: last[2] };
    }

    // คำนวณค่าชดเชยลมจากตาราง (สูตรเดียวกับ arma-mortar.com)
    // - deltaRange (m): บวกเข้ากับระยะที่ใช้เปิดตาราง (ลมต้าน → เล็งไกลขึ้น)
    // - deflectMils (mils): บวกเข้ากับอาซิมุท (+ = ขวา) ในระบบมิลของปืนนั้น
    computeWindAdjustment(distance, azimuthDeg, ring) {
        const table = this.getWindTableForCurrentShell();
        const speed = Math.max(0, this.gameWind ? this.gameWind.speed : 0);
        if (!table || !table[ring] || speed <= 0) return null;
        const row = this.interpolateWindRow(table[ring], distance);
        if (!row) return null;

        const fromDeg = ((this.gameWind.dirFrom || 0) % 360 + 360) % 360;
        const delta = (fromDeg - azimuthDeg) * Math.PI / 180;
        const headwind = Math.cos(delta) * speed;   // + = ลมพัดมาจากทิศที่ยิง (ต้านกระสุน)
        const crosswind = Math.sin(delta) * speed;  // + = ลมพัดมาจากขวาของแนวยิง

        return {
            headwind: headwind,
            crosswind: crosswind,
            wc: row.wc,
            wl: row.wl,
            ring: ring,
            deltaRange: (row.wl / 10) * headwind,
            deflectMils: (row.wc / 10) * crosswind
        };
    }

    // แสดงสถานะการชดเชยลมใต้หน้าปัด
    updateWindStatus() {
        if (!this.windStatusEl) return;
        const speed = this.gameWind ? this.gameWind.speed : 0;
        const table = this.getWindTableForCurrentShell();
        const th = currentLanguage === 'th';

        if (speed > 0 && !table) {
            this.windStatusEl.className = 'wind-status show warn';
            this.windStatusEl.textContent = th
                ? '⚠️ กระสุนนี้ยังไม่มีตารางค่าแก้ลม — ระบบจะไม่ชดเชยลมให้'
                : '⚠️ No wind correction table for this shell yet — wind will not be compensated';
            return;
        }
        if (speed > 0 && this.lastWindAdjust) {
            const w = this.lastWindAdjust;
            const dR = Math.round(w.deltaRange);
            const dA = Math.round(w.deflectMils);
            this.windStatusEl.className = 'wind-status show';
            this.windStatusEl.textContent = th
                ? `🌬️ ชดเชยลม: ระยะเล็ง ${dR >= 0 ? '+' : ''}${dR} m | อาซิมุท ${dA >= 0 ? '+' : ''}${dA} mils ${dA > 0 ? '(ขวา)' : dA < 0 ? '(ซ้าย)' : ''}`
                : `🌬️ Wind correction: aim range ${dR >= 0 ? '+' : ''}${dR} m | azimuth ${dA >= 0 ? '+' : ''}${dA} mils ${dA > 0 ? '(right)' : dA < 0 ? '(left)' : ''}`;
            return;
        }
        this.windStatusEl.className = 'wind-status';
        this.windStatusEl.textContent = '';
    }

    // =============== โหมดคำนวณขั้นสูง (จำลองวิถีกระสุน) ==================
    initAdvancedPanel() {
        this.advSection = document.getElementById('advanced-section');
        this.advToggle = document.getElementById('advanced-toggle');
        if (!this.advToggle) return;

        this.advToggle.checked = this.enableAdvanced;
        this.applyAdvancedVisibility();

        this.advToggle.addEventListener('change', () => {
            const wantOff = !this.advToggle.checked;
            if (wantOff) {
                // เตือนก่อนปิด เพราะจะเหลือแค่วิธีตารางซึ่งเพี้ยนเมื่อความสูงต่างกันมาก
                this.advToggle.checked = true;          // ยังไม่ปิดจนกว่าจะยืนยัน
                this.showAdvancedWarning(
                    () => {                              // ยืนยันปิด
                        this.advToggle.checked = false;
                        this.setAdvancedEnabled(false);
                    },
                    () => { this.advToggle.checked = true; }  // ยกเลิก
                );
                return;
            }
            this.setAdvancedEnabled(true);
            this.showMessage(
                currentLanguage === 'th'
                    ? 'เปิดโหมดคำนวณขั้นสูงแล้ว — ค่าแก้ความสูงและลมจะคำนวณจากวิถีกระสุนจริง'
                    : 'Advanced mode on — height and wind are solved from the real trajectory',
                'success'
            );
        });
    }

    setAdvancedEnabled(on) {
        this.enableAdvanced = on;
        this.applyAdvancedVisibility();
        // ต้องคำนวณใหม่ทั้งตอนเปิดและตอนปิด เพราะค่าหลักที่แสดงเปลี่ยนแหล่งที่มา
        // (ปิดแล้วต้องกลับไปใช้ค่าจากตาราง ไม่ใช่ค้างค่าจำลองไว้)
        if (this.validateInputs()) this.calculate();
    }

    // Popup เตือนผลของการปิดโหมดขั้นสูง
    showAdvancedWarning(onConfirm, onCancel) {
        const th = currentLanguage === 'th';
        document.getElementById('adv-warning-modal')?.remove();

        const overlay = document.createElement('div');
        overlay.id = 'adv-warning-modal';
        overlay.className = 'adv-modal-overlay';
        overlay.innerHTML = `
            <div class="adv-modal" role="alertdialog" aria-modal="true" aria-labelledby="adv-modal-title">
                <div class="adv-modal-icon">⚠️</div>
                <h3 id="adv-modal-title">${th ? 'ปิดโหมดคำนวณขั้นสูง?' : 'Turn off Advanced mode?'}</h3>
                <p>${th
                ? 'ถ้าปิด <strong>Advanced (Trajectory Simulation)</strong> เครื่องคำนวณจะใช้ข้อมูลจากตารางแบบปกติเท่านั้น'
                : 'If you turn off <strong>Advanced (Trajectory Simulation)</strong>, the calculator will use the standard table data only.'}</p>
                <p class="adv-modal-warn">${th
                ? 'และเมื่อความสูงระหว่างปืนกับเป้าหมายต่างกันมาก ๆ ค่าที่ได้จะเพี้ยนสูง'
                : 'When the height difference between the mortar and the target is large, the result will be significantly off.'}</p>
                <div class="adv-modal-actions">
                    <button type="button" class="adv-modal-btn adv-modal-cancel">${th ? 'ยกเลิก (เปิดต่อไป)' : 'Cancel (keep it on)'}</button>
                    <button type="button" class="adv-modal-btn adv-modal-confirm">${th ? 'ปิดโหมดขั้นสูง' : 'Turn it off'}</button>
                </div>
            </div>
        `;

        const close = (cb) => {
            document.removeEventListener('keydown', onKey);
            overlay.remove();
            if (cb) cb();
        };
        const onKey = (e) => { if (e.key === 'Escape') close(onCancel); };

        overlay.querySelector('.adv-modal-cancel').addEventListener('click', () => close(onCancel));
        overlay.querySelector('.adv-modal-confirm').addEventListener('click', () => close(onConfirm));
        overlay.addEventListener('click', (e) => { if (e.target === overlay) close(onCancel); });
        document.addEventListener('keydown', onKey);

        document.body.appendChild(overlay);
        overlay.querySelector('.adv-modal-cancel').focus();
    }

    applyAdvancedVisibility() {
        // ผลลัพธ์ของโหมดขั้นสูงแสดงในส่วน FIRING SOLUTION — ปิดโหมดแล้วต้องซ่อนและล้างค่าเก่าทิ้ง
        const box = document.getElementById('advanced-results');
        if (!box) return;
        if (this.enableAdvanced) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
            box.innerHTML = '';
        }
    }

    // ขีดจำกัดมุมยกของฐานปืนที่เลือกอยู่
    getElevLimits() {
        return ELEV_LIMITS[this.currentMortarType] || ELEV_LIMITS.original;
    }

    getShellPhysics() {
        const src = SHELL_PHYSICS[this.currentMortarType];
        return (src && src[this.currentShell]) || null;
    }

    // แปลงลม (ทิศที่พัดมาจาก) เป็นองค์ประกอบเทียบแนวยิง
    //   along: + = ลมส่งท้าย (ดันกระสุนไปข้างหน้า)   cross: + = ดันกระสุนไปทางขวา
    windComponents(azimuthDeg) {
        if (!this.gameWind || !(this.gameWind.speed > 0)) return { along: 0, cross: 0 };
        const windTo = (this.gameWind.dirFrom + 180) % 360;
        const d = (windTo - azimuthDeg) * Math.PI / 180;
        return {
            along: this.gameWind.speed * Math.cos(d),
            cross: this.gameWind.speed * Math.sin(d)
        };
    }

    // เก็บเส้นทางวิถีกระสุนสำหรับวาดกราฟ + หาจุดสูงสุด (จุดกลับตัว)
    buildTrajectoryPath(v0, k, elevDeg, heightDiff, wind) {
        const raw = [];
        const hit = BALLISTIC_SIM.shoot(v0, k, elevDeg, heightDiff, wind, 0.01, raw);
        if (!hit || raw.length < 3) return null;

        // หาจุดกลับตัว (ความสูงมากที่สุด) ก่อนลดจำนวนจุด เพื่อไม่ให้พลาดยอดจริง
        let apex = raw[0];
        for (const pt of raw) if (pt[1] > apex[1]) apex = pt;

        // ลดจำนวนจุดให้เหลือราว 160 จุดพอสำหรับวาด
        const step = Math.max(1, Math.floor(raw.length / 160));
        const pts = [];
        for (let i = 0; i < raw.length; i += step) pts.push(raw[i]);
        if (pts[pts.length - 1] !== raw[raw.length - 1]) pts.push(raw[raw.length - 1]);

        return { points: pts, apex: { range: apex[0], height: apex[1], time: apex[2] }, hit };
    }

    // คำนวณคำตอบการยิงด้วยการจำลองวิถีจริง (ระยะจริง + ความสูงจริง ไม่มีการประมาณ)
    // การเลือก RING:
    //   - ถ้าผู้ใช้กดเลือกประจุเอง -> ใช้ประจุนั้น (ผู้ใช้ต้องเห็นวิถีของประจุที่ตัวเองกด)
    //   - ถ้าไม่ได้เลือก -> เลือกให้เอง โดยไล่จาก ring ต่ำสุดที่ยิงถึงจริง
    //     (ประจุน้อย = วิถีชันกว่า เวลาบินสั้นกว่า แม่นกว่า)
    computeAdvancedSolution(distance, heightDiff, azimuthDeg) {
        const phys = this.getShellPhysics();
        if (!phys) return { available: false, reason: 'noData' };

        const wind = this.windComponents(azimuthDeg);
        const useWind = (wind.along !== 0 || wind.cross !== 0) ? wind : null;
        const ringList = Object.keys(phys.rings).map(Number).sort((a, b) => a - b);

        const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

        // ประจุที่ผู้ใช้กดเลือกเอง (ถ้ามีอยู่จริงในข้อมูลฟิสิกส์)
        const forcedRing = (this.manualRingSelected && phys.rings[this.currentCharge] !== undefined)
            ? this.currentCharge : null;

        let picked = null;
        let forced = null;                  // ผลของประจุที่ผู้ใช้เลือก (สำเร็จหรือไม่ก็ตาม)
        const viable = [];
        // เก็บ "สาเหตุที่ยิงไม่ได้" แยกเป็น 3 แบบ เพื่อบอกผู้ใช้ให้ตรงเหตุ:
        //   tooFar   = ขึ้นไปถึงระดับความสูงเป้าหมายได้ แต่ไปไม่ถึงระยะนั้น
        //   tooClose = ไปได้ไกลกว่าเป้า แต่ใกล้เกินไปจนมุมยกชนขีดจำกัด 85° ของฐานปืน
        //   noLift   = ยิงขึ้นไปไม่ถึงระดับความสูงเป้าหมายเลย
        let tooFar = null;      // { ring, maxRange } ที่ไปได้ไกลสุด
        let tooClose = null;    // { ring, minRange } ที่เข้าใกล้ได้มากสุด

        for (const ring of ringList) {
            const v0 = phys.rings[ring];
            const sol = BALLISTIC_SIM.solve(v0, phys.k, distance, heightDiff, useWind, this.getElevLimits());
            if (ring === forcedRing) forced = { ring, v0, sol };
            if (sol.error) {
                if (sol.error === 'tooClose') {
                    if (!tooClose || sol.minRange < tooClose.minRange) tooClose = { ring, minRange: sol.minRange };
                } else if (sol.error === 'range' && sol.maxRange > 0) {
                    if (!tooFar || sol.maxRange > tooFar.maxRange) tooFar = { ring, maxRange: sol.maxRange };
                }
                // maxRange = 0 คือยกกระสุนขึ้นไม่ถึงความสูงเป้าหมาย ไม่ต้องเก็บอะไร
                continue;
            }
            viable.push(ring);
            if (!picked) picked = { ring, v0, sol };
        }

        const t1 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

        // ผู้ใช้เลือกประจุเอง — ต้องแสดงผลของประจุนั้น ไม่ใช่ประจุที่ระบบเลือกให้
        if (forced) {
            if (!forced.sol.error) {
                picked = forced;
            } else {
                const err = forced.sol;
                const base = {
                    available: false, ring: forced.ring, manualRing: true,
                    viableRings: viable, computeMs: t1 - t0
                };
                if (err.error === 'tooClose') return Object.assign(base, { reason: 'tooClose', minRange: err.minRange });
                if (err.error === 'range' && err.maxRange > 0) return Object.assign(base, { reason: 'range', maxRange: err.maxRange });
                return Object.assign(base, { reason: 'noLift' });
            }
        }

        if (!picked) {
            // ใกล้เกินไปมาก่อน เพราะแปลว่ามีประจุที่ยกกระสุนขึ้นไปถึงความสูงนั้นได้แล้ว
            if (tooClose) {
                return { available: false, reason: 'tooClose', minRange: tooClose.minRange, ring: tooClose.ring, viableRings: viable, computeMs: t1 - t0 };
            }
            if (tooFar) {
                return { available: false, reason: 'range', maxRange: tooFar.maxRange, ring: tooFar.ring, viableRings: viable, computeMs: t1 - t0 };
            }
            // ไม่มีประจุไหนยกกระสุนขึ้นไปถึงระดับความสูงเป้าหมายได้เลย
            return { available: false, reason: 'noLift', ring: ringList[ringList.length - 1], viableRings: viable, computeMs: t1 - t0 };
        }

        const sol = picked.sol;
        // ค่าออฟเซ็ตที่ผู้ใช้ตั้งเองเป็นการปรับศูนย์เล็ง ใช้ได้กับทั้งสองวิธี
        // ต้องบวกให้โหมดจำลองด้วย ไม่งั้นตอนเทียบกันจะเห็นเป็นส่วนต่างปลอมเท่ากับค่าออฟเซ็ต
        const mils = this.degreesToMils(sol.elevationDeg) + this.elevationOffset;
        // ค่าแก้ทิศจากลมขวาง: กระสุนถูกดันไปทางขวา = ต้องเล็งไปทางซ้าย
        const deflectMils = distance > 0
            ? -this.degreesToMils(Math.atan2(sol.drift, distance) * 180 / Math.PI)
            : 0;

        return {
            available: true,
            ring: picked.ring,
            v0: picked.v0,
            k: phys.k,
            viableRings: viable,
            elevationOffset: this.elevationOffset,
            trajectory: this.buildTrajectoryPath(picked.v0, phys.k, sol.elevationDeg, heightDiff, useWind),
            heightDiff: heightDiff,
            elevationMils: Math.round(mils),
            elevationDeg: sol.elevationDeg,
            timeOfFlight: sol.timeOfFlight,
            impactAngle: sol.impactAngle,
            drift: sol.drift,
            deflectMils,
            azimuthMils: Math.round(this.degreesToMils(azimuthDeg) + deflectMils),
            maxRange: sol.maxRange,
            wind: wind,
            computeMs: t1 - t0
        };
    }

    // วาดวิถีกระสุนเป็น SVG: จุดตั้งปืน -> เส้นวิถี -> เป้าหมาย พร้อมความสูงและเวลา
    renderTrajectorySvg(adv, weaponAlt) {
        const tr = adv.trajectory;
        if (!tr || !tr.points.length) return '';
        const th = currentLanguage === 'th';

        // จอแคบต้องเผื่อขอบมากขึ้น เพราะตัวอักษรถูกขยายในหน่วย viewBox เพื่อชดเชยการย่อ (ดู style.css)
        const narrow = (window.innerWidth || 1024) <= 640;
        const W = 640, H = narrow ? 300 : 260;
        const padL = narrow ? 58 : 52, padR = narrow ? 58 : 52;
        const padT = narrow ? 34 : 26, padB = narrow ? 58 : 34;

        const targetAlt = weaponAlt + adv.heightDiff;
        const maxRange = tr.points[tr.points.length - 1][0] || 1;
        // แกนตั้งอิงความสูงจริงเหนือระดับน้ำทะเล: ฐานคือจุดที่ต่ำกว่าระหว่างปืนกับเป้า
        const baseAlt = Math.min(weaponAlt, targetAlt);
        const topAlt = weaponAlt + tr.apex.height;
        const span = Math.max(1, topAlt - baseAlt);

        const sx = r => padL + (r / maxRange) * (W - padL - padR);
        const sy = a => H - padB - ((a - baseAlt) / span) * (H - padT - padB);

        const d = tr.points
            .map((p, i) => `${i ? 'L' : 'M'}${sx(p[0]).toFixed(1)},${sy(weaponAlt + p[1]).toFixed(1)}`)
            .join(' ');

        const gx = sx(0), gy = sy(weaponAlt);          // ปืน
        const tx = sx(maxRange), ty = sy(targetAlt);   // เป้าหมาย
        const ax = sx(tr.apex.range), ay = sy(topAlt); // จุดกลับตัว

        const mLbl = th ? 'ปืน' : 'Mortar';
        const tLbl = th ? 'เป้าหมาย' : 'Target';
        const aLbl = th ? 'จุดสูงสุด' : 'Apex';

        return `
        <div class="adv-traj">
            <div class="adv-traj-title">${th ? '🛰️ เส้นวิถีกระสุน (จากการจำลอง)' : '🛰️ Simulated Trajectory'}</div>
            <svg class="adv-traj-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img"
                 aria-label="${th ? 'กราฟวิถีกระสุน' : 'Projectile trajectory chart'}">
                <line x1="${padL}" y1="${padT - 12}" x2="${padL}" y2="${H - padB}" class="traj-axis"/>
                <line x1="${padL}" y1="${H - padB}" x2="${W - padR + 12}" y2="${H - padB}" class="traj-axis"/>

                <line x1="${ax}" y1="${ay}" x2="${ax}" y2="${H - padB}" class="traj-guide"/>
                <path d="${d}" class="traj-path"/>

                <circle cx="${ax}" cy="${ay}" r="3.5" class="traj-apex-dot"/>
                <text x="${Math.min(Math.max(ax, padL + 60), W - padR - 60)}" y="${ay - (narrow ? 14 : 10)}" class="traj-apex-lbl" text-anchor="middle">${aLbl} ${Math.round(topAlt)} m · ${tr.apex.time.toFixed(1)} s</text>

                <polygon points="${gx - 6},${gy} ${gx + 6},${gy} ${gx},${gy - 11}" class="traj-mortar"/>
                <text x="${gx}" y="${H - padB + (narrow ? 26 : 15)}" class="traj-lbl traj-lbl-mortar" text-anchor="start">${Math.round(weaponAlt)} m</text>
                <text x="${gx}" y="${H - padB + (narrow ? 48 : 28)}" class="traj-sub" text-anchor="start">${mLbl}</text>

                <line x1="${tx - 6}" y1="${ty - 6}" x2="${tx + 6}" y2="${ty + 6}" class="traj-target"/>
                <line x1="${tx + 6}" y1="${ty - 6}" x2="${tx - 6}" y2="${ty + 6}" class="traj-target"/>
                <text x="${tx}" y="${H - padB + (narrow ? 26 : 15)}" class="traj-lbl traj-lbl-target" text-anchor="end">${Math.round(targetAlt)} m</text>
                <text x="${tx}" y="${H - padB + (narrow ? 48 : 28)}" class="traj-sub" text-anchor="end">${tLbl} · ${adv.timeOfFlight.toFixed(1)} s</text>

                <text x="${(gx + tx) / 2}" y="${H - padB + (narrow ? 26 : 22)}" class="traj-sub" text-anchor="middle">${Math.round(maxRange)} m</text>
            </svg>
        </div>`;
    }

    displayAdvancedSolution(adv, tableResult) {
        const box = document.getElementById('advanced-results');
        if (!box) return;
        const th = currentLanguage === 'th';

        const title = `<div class="adv-block-title">${th ? '🧪 คำนวณขั้นสูง — จำลองวิถีกระสุน' : '🧪 Advanced — Trajectory Simulation'}</div>`;

        if (!adv.available) {
            let msg;
            if (adv.reason === 'noData') {
                msg = th ? '⚠️ กระสุนนี้ไม่มีข้อมูลฟิสิกส์ในไฟล์เกม'
                    : '⚠️ No physics data for this shell in the game files';
            } else if (adv.reason === 'range') {
                msg = th ? `⚠️ ไกลเกินไป — ระยะไกลสุดที่ความสูงนี้คือ ${Math.round(adv.maxRange)} m (RING ${adv.ring})`
                    : `⚠️ Too far — the longest reach at this height is ${Math.round(adv.maxRange)} m (RING ${adv.ring})`;
            } else if (adv.reason === 'noLift') {
                msg = th ? `⚠️ เป้าหมายสูงเกินไป — ไม่มีประจุไหนยิงกระสุนขึ้นไปถึงระดับความสูงนั้นได้`
                    : `⚠️ Target is too high — no charge can lift the shell to that altitude`;
            } else if (adv.reason === 'tooClose') {
                msg = th ? `⚠️ ใกล้เกินไป — ประจุที่ยิงใกล้ได้สุดคือ RING ${adv.ring} ที่ ${Math.round(adv.minRange)} m (มุมยกชนขีดจำกัด 85° ของฐานปืน)`
                    : `⚠️ Too close — the shortest reach is RING ${adv.ring} at ${Math.round(adv.minRange)} m (elevation capped at the mount's 85° limit)`;
            } else {
                msg = th ? '⚠️ คำนวณไม่สำเร็จ' : '⚠️ Simulation failed';
            }
            box.innerHTML = title + `<div class="adv-warn">${msg}</div>`;
            return;
        }

        const sameRing = adv.ring === tableResult.charge;
        const dElev = adv.elevationMils - tableResult.elevation;
        const dAz = adv.azimuthMils - tableResult.azimuthMils;
        const dTof = adv.timeOfFlight - parseFloat(tableResult.timeOfFlight);
        const sign = v => (v > 0 ? '+' : '') + v;
        // เทียบมุมยกกันตรง ๆ ได้เฉพาะเมื่อใช้ ring เดียวกัน
        const big = sameRing && Math.abs(dElev) >= 15;

        box.innerHTML = title + `
            <div class="adv-grid">
                <div class="adv-item">
                    <label>${th ? 'ประจุ (เลือกเอง)' : 'Charge (auto)'}</label>
                    <span class="adv-main">RING ${adv.ring}</span>
                </div>
                <div class="adv-item">
                    <label>${th ? 'มุมยกปืน (จำลอง)' : 'Elevation (simulated)'}</label>
                    <span class="adv-main">${adv.elevationMils} mils</span>
                </div>
                <div class="adv-item">
                    <label>${th ? 'ทิศทาง (จำลอง)' : 'Azimuth (simulated)'}</label>
                    <span class="adv-main">${adv.azimuthMils} mils</span>
                </div>
                <div class="adv-item">
                    <label>${th ? 'เวลาบิน' : 'Time of Flight'}</label>
                    <span>${adv.timeOfFlight.toFixed(1)} s</span>
                </div>
                <div class="adv-item">
                    <label>${th ? 'มุมตกกระทบ' : 'Impact Angle'}</label>
                    <span>${adv.impactAngle.toFixed(1)}°</span>
                </div>
            </div>
            <div class="adv-compare ${big || !sameRing ? 'adv-diverge' : ''}">
                <div class="adv-compare-title">${th ? '📐 เทียบกับวิธีตาราง' : '📐 vs Table Method'}</div>
                <table class="adv-table">
                    <tr>
                        <th></th>
                        <th>${th ? 'ตาราง' : 'Table'}</th>
                        <th>${th ? 'จำลอง' : 'Simulated'}</th>
                        <th>${th ? 'ต่าง' : 'Diff'}</th>
                    </tr>
                    <tr>
                        <td>RING</td>
                        <td>${tableResult.charge}</td>
                        <td>${adv.ring}</td>
                        <td class="${sameRing ? '' : 'adv-big'}">${sameRing ? (th ? 'เท่ากัน' : 'same') : (th ? 'ต่างกัน' : 'differs')}</td>
                    </tr>
                    <tr>
                        <td>${th ? 'มุมยก' : 'Elevation'}</td>
                        <td>${tableResult.elevation}</td>
                        <td>${adv.elevationMils}</td>
                        <td class="${big ? 'adv-big' : ''}">${sameRing ? sign(dElev) + ' mils' : '—'}</td>
                    </tr>
                    <tr>
                        <td>${th ? 'ทิศทาง' : 'Azimuth'}</td>
                        <td>${tableResult.azimuthMils}</td>
                        <td>${adv.azimuthMils}</td>
                        <td>${sign(dAz)} mils</td>
                    </tr>
                    <tr>
                        <td>${th ? 'เวลาบิน' : 'ToF'}</td>
                        <td>${tableResult.timeOfFlight}</td>
                        <td>${adv.timeOfFlight.toFixed(1)}</td>
                        <td>${sameRing ? sign(+dTof.toFixed(1)) + ' s' : '—'}</td>
                    </tr>
                </table>
                ${!sameRing ? `<div class="adv-note">${th
                ? `คนละประจุจึงเทียบมุมยกกันตรง ๆ ไม่ได้ — โหมดจำลองเลือก RING ${adv.ring} เพราะเป็นประจุต่ำสุดที่ยิงถึงจริงเมื่อคิดความสูงและลมด้วย`
                : `Different charges, so elevations are not directly comparable — the simulation picked RING ${adv.ring} as the lowest charge that actually reaches once height and wind are accounted for.`}</div>`
                : big ? `<div class="adv-note">${th
                    ? 'ต่างกันมากเพราะความสูงต่างกันเยอะ — วิธีตารางใช้ค่าแก้ความสูงแบบเชิงเส้นซึ่งใช้ได้ดีเฉพาะเมื่อความสูงต่างกันน้อย ส่วนโหมดจำลองแก้วิถีจริงเหมือนที่เกมทำตอนยิง'
                    : 'Large gap due to the height difference — the table method uses a linear height correction that only holds for small offsets, while the simulation solves the real trajectory the way the game does when firing.'}</div>` : ''}
            </div>
            ${this.renderTrajectorySvg(adv, parseInt(this.weaponAlt.value) || 0)}
            <div class="adv-meta">
                ${th ? 'ประจุที่ยิงถึง' : 'RINGs that reach'}: ${adv.viableRings.join(', ')} ·
                v₀ ${adv.v0.toFixed(1)} m/s · k ${adv.k.toExponential(2)} ·
                ${th ? 'ระยะไกลสุดของ RING นี้' : 'max range this RING'} ${Math.round(adv.maxRange)} m${adv.wind.along || adv.wind.cross
                ? ` · ${th ? 'ลม' : 'wind'} ${adv.wind.along >= 0 ? '+' : ''}${adv.wind.along.toFixed(1)}/${adv.wind.cross >= 0 ? '+' : ''}${adv.wind.cross.toFixed(1)} m/s (${th ? 'ตาม/ข้าง' : 'along/cross'})` : ''} ·
                ${adv.computeMs.toFixed(1)} ms
            </div>
        `;
    }

    setupDeviceSpecificUI() {
        // Detect if device supports touch
        const isTouchDevice = ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);

        if (isTouchDevice) {
            // Show mobile instructions
            document.querySelectorAll('.desktop-instructions').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.mobile-instructions').forEach(el => el.style.display = 'inline');

            // Add mobile-friendly class to body
            document.body.classList.add('touch-device');
        } else {
            // Show desktop instructions
            document.querySelectorAll('.desktop-instructions').forEach(el => el.style.display = 'inline');
            document.querySelectorAll('.mobile-instructions').forEach(el => el.style.display = 'none');
        }
    }

    updateShellInfo() {
        const shellTypeEl = document.querySelector('.shell-type');
        if (shellTypeEl) {
            const texts = LANGUAGE_DATA[currentLanguage];
            let shellText = '';

            switch (this.currentShell) {
                case 'M821':
                    shellText = texts.heShell;
                    break;
                case 'M819':
                    shellText = texts.smokeShell;
                    break;
                case 'M853A1':
                    shellText = texts.illuminationShell;
                    break;
                case '0-832Ay':
                    shellText = texts["0832AyShell"];
                    break;
                case 'A-832AY':
                    shellText = texts["A832AYShell"];
                    break;
                case 'C-832C':
                    shellText = texts["C832CShell"];
                    break;
                // M777 — ทั้ง 4 ชนิดยิงเหมือนกัน ต่างแค่หัวกระสุน
                case 'M107':
                    shellText = texts.heShell;
                    break;
                case 'M107-AB':
                    shellText = texts.heShell + ' (airburst)';
                    break;
                case 'M116-WP':
                    shellText = texts.smokeShell;
                    break;
                case 'M485A2':
                    shellText = texts.illuminationShell;
                    break;
                default:
                    shellText = texts.heShell;
            }

            shellTypeEl.textContent = shellText;
        }

        // อัปเดตสถานะลม (บางกระสุน/ปืนไม่มีตารางค่าแก้ลม)
        if (this.updateWindStatus) {
            if (!(this.validateInputs && this.validateInputs())) this.lastWindAdjust = null;
            this.updateWindStatus();
        }
    }

    // สร้างปุ่มเลือกกระสุนตามประเภทปืนที่เลือกอยู่
    // แยกชุดกันชัดเจน กระสุนปืนใหญ่ M777 จะไม่ปนกับกระสุนมอร์ต้าร์
    renderShellButtons() {
        if (!this.shellButtonsEl) return;
        const shells = Object.keys(BALLISTIC_DATA[this.currentMortarType] || {});
        if (!shells.length) return;

        // กระสุนที่เลือกอยู่อาจไม่มีในประเภทนี้ ให้ย้ายไปตัวแรกแทน
        if (shells.indexOf(this.currentShell) === -1) this.currentShell = shells[0];

        this.shellButtonsEl.innerHTML = shells.map(s =>
            `<button class="shell-btn ${s === this.currentShell ? 'active' : ''}" data-shell="${s}">${SHELL_LABELS[s] || s}</button>`
        ).join('');

        this.shellButtons = Array.from(this.shellButtonsEl.querySelectorAll('.shell-btn'));
        this.shellButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.shellButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentShell = btn.dataset.shell;
                this.updateShellInfo();
                this.createChargeTabs();
                this.loadBallisticData();
                if (this.validateInputs()) this.calculate();
            });
        });
        this.updateShellInfo();
    }

    createChargeTabs() {
        const charges = this.getAvailableCharges();
        this.chargeTabsEl.innerHTML = '';

        // Reset current charge to first available charge
        if (charges.length > 0) {
            this.currentCharge = charges[0];
        }
        // เปลี่ยนกระสุน/ประเภทปืนแล้ว ประจุที่ผู้ใช้เคยเลือกเองไม่เกี่ยวข้องอีกต่อไป
        // ถ้าไม่ล้างค่านี้ ระบบจะล็อกอยู่กับ ring เดิมที่อาจไม่มีในกระสุนใหม่ แล้วอ่านค่าจากตารางผิด
        this.manualRingSelected = false;

        charges.forEach((charge, index) => {
            const tab = document.createElement('button');
            tab.className = `charge-tab ${charge === this.currentCharge ? 'active' : ''}`;
            tab.textContent = `Charge ${charge}`;
            tab.dataset.charge = charge;

            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.charge-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCharge = parseInt(e.target.dataset.charge);
                // ผู้ใช้เลือกประจุเอง — ต้องล็อกไว้ ไม่งั้น calculate() จะเลือกใหม่ทับทันที
                // แล้วตารางด้านล่างจะเป็นคนละประจุกับคำตอบที่แสดง
                this.manualRingSelected = true;
                this.loadBallisticData();
                if (this.validateInputs()) {
                    this.calculate();
                }
            });

            this.chargeTabsEl.appendChild(tab);
        });

        // ชุดประจุเปลี่ยนไปตามกระสุน ปุ่มเลือกต้องสร้างใหม่ตาม
        this.renderRingPickers();
    }

    getAvailableCharges() {
        const data = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!data) return [0];
        return Object.keys(data).map(Number).sort((a, b) => a - b);
    }

    loadBallisticData() {
        const data = this.getCurrentBallisticData();
        this.ballisticTbody.innerHTML = '';

        if (!data || data.length === 0) {
            this.ballisticTbody.innerHTML = '<tr><td colspan="4">No data available</td></tr>';
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.range}</td>
                <td>${item.elevation}</td>
                <td>${item.timeOfFlight}</td>
                <td>${item.dispersion}</td>
            `;
            row.dataset.range = item.range;
            this.ballisticTbody.appendChild(row);
        });
    }

    getCurrentBallisticData() {
        return BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell]?.[this.currentCharge] || [];
    }

    // Select optimal charge/ring based on distance to minimize compensation
    selectOptimalCharge(targetDistance) {
        const shellData = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!shellData) return this.currentCharge;

        let bestCharge = this.currentCharge;
        let bestScore = Infinity;

        // Check each available charge/ring
        Object.keys(shellData).forEach(charge => {
            const chargeData = shellData[charge];
            if (!chargeData || chargeData.length === 0) return;

            // Filter out invalid data (dispersion = "0m")
            const validData = chargeData.filter(item => item.dispersion !== "0m");
            if (validData.length === 0) return;

            // Find if target distance falls within this charge's effective range
            const minRange = Math.min(...validData.map(item => item.range));
            const maxRange = Math.max(...validData.map(item => item.range));

            let score;
            if (targetDistance >= minRange && targetDistance <= maxRange) {
                // Distance is within range - perfect score is 0
                score = 0;
            } else {
                // Distance is outside range - calculate how far outside
                if (targetDistance < minRange) {
                    score = minRange - targetDistance;
                } else {
                    score = targetDistance - maxRange;
                }
            }

            // Prefer charges with target distance within range, then closest ranges
            if (score < bestScore) {
                bestScore = score;
                bestCharge = parseInt(charge);
            }
        });

        return bestCharge;
    }

    // Update charge tabs display to reflect current selection
    updateChargeTabsDisplay() {
        const tabs = this.chargeTabsEl.querySelectorAll('.charge-tab');
        tabs.forEach(tab => {
            const tabCharge = parseInt(tab.dataset.charge);
            if (tabCharge === this.currentCharge) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    validateInputs() {
        const inputs = [this.weaponX, this.weaponY, this.weaponAlt,
        this.targetX, this.targetY, this.targetAlt];

        let isValid = true;
        let coordinateError = false;

        inputs.forEach(input => {
            input.classList.remove('error', 'success');
            if (!input.value || isNaN(input.value)) {
                input.classList.add('error');
                isValid = false;
            } else {
                // Validate grid coordinates
                if (input === this.weaponX || input === this.targetX ||
                    input === this.weaponY || input === this.targetY) {
                    const value = parseInt(input.value);
                    const valueString = input.value.toString();

                    // Check if coordinates are within valid range (0-99999)
                    if (value < 0 || value > 99999 || valueString.length > 5) {
                        input.classList.add('error');
                        isValid = false;
                    }
                    // Check if coordinates have exactly 5 digits (including leading zeros)
                    else if (valueString.length < 5) {
                        input.classList.add('error');
                        isValid = false;
                        coordinateError = true;
                    } else {
                        input.classList.add('success');
                    }
                } else {
                    input.classList.add('success');
                }
            }
        });

        // Show coordinate error message if coordinates are less than 5 digits
        if (coordinateError) {
            this.showCoordinateError();
        }

        return isValid;
    }

    // Restrict input to maximum 5 digits for coordinate fields
    restrictToFiveDigits(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            // Remove any non-numeric characters (except for number inputs, but just to be safe)
            value = value.replace(/[^0-9]/g, '');
            // Limit to 5 digits
            if (value.length > 5) {
                value = value.slice(0, 5);
            }
            e.target.value = value;
        });

        // Also handle paste events
        input.addEventListener('paste', (e) => {
            setTimeout(() => {
                let value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length > 5) {
                    value = value.slice(0, 5);
                }
                e.target.value = value;
            }, 10);
        });
    }

    // Update grid reference displays
    updateGridReferences() {
        if (this.weaponX.value && this.weaponY.value) {
            const weaponGrid = this.formatGridReference(parseInt(this.weaponX.value), parseInt(this.weaponY.value));
            this.weaponGridRef.textContent = weaponGrid;
        } else {
            this.weaponGridRef.textContent = '-';
        }

        if (this.targetX.value && this.targetY.value) {
            const targetGrid = this.formatGridReference(parseInt(this.targetX.value), parseInt(this.targetY.value));
            this.targetGridRef.textContent = targetGrid;
        } else {
            this.targetGridRef.textContent = '-';
        }
    }

    // Format grid coordinates to ARMA style (e.g., 105 053)
    formatGridReference(x, y) {
        const gridX = Math.floor(x / 100).toString().padStart(3, '0');
        const gridY = Math.floor(y / 100).toString().padStart(3, '0');
        return `${gridX} ${gridY}`;
    }

    // Calculate distance between two grid coordinates (direct cartesian distance)
    calculateDistance(x1, y1, x2, y2) {
        // Grid coordinates are in meters, so direct calculation
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Calculate azimuth (bearing) from weapon to target using grid coordinates
    calculateAzimuth(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;

        // Calculate angle in radians, then convert to degrees
        let angle = Math.atan2(dx, dy) * 180 / Math.PI;

        // Convert to 0-360 degree bearing (North = 0°, East = 90°)
        if (angle < 0) {
            angle += 360;
        }

        return angle;

        let bearing = Math.atan2(y, x) * 180 / Math.PI;
        return (bearing + 360) % 360;
    }

    // กำหนดประเภทกระสุนตามระบบ mils
    getShellMilliradianSystem() {
        const russianShells = ['0-832Ay', 'A-832AY', 'C-832C'];
        const natoShells = ['M821', 'M819', 'M853A1'];

        if (russianShells.includes(this.currentShell)) {
            return 'russian'; // 6000 mils = 360°
        } else if (natoShells.includes(this.currentShell)) {
            return 'nato'; // 6400 mils = 360°
        }

        // Default to NATO system
        return 'nato';
    }

    // Convert degrees to mils based on shell type
    degreesToMils(degrees) {
        const system = this.getShellMilliradianSystem();

        if (system === 'russian') {
            // รัสเซีย: 6000 mils = 360°, ดังนั้น 1° = 16.6667 mils
            return degrees * 16.666666666667;
        } else {
            // NATO: 6400 mils = 360°, ดังนั้น 1° = 17.7778 mils  
            return degrees * 17.777777777778;
        }
    }

    // Convert mils to degrees based on shell type
    milsToDegrees(mils) {
        const system = this.getShellMilliradianSystem();

        if (system === 'russian') {
            // รัสเซีย: 6000 mils = 360°
            return mils * 0.06; // 1 mil = 0.06°
        } else {
            // NATO: 6400 mils = 360°
            return mils * 0.05625; // 1 mil = 0.05625°
        }
    }

    // ค้นหาข้อมูลการยิงจากตาราง BALLISTIC_DATA ตามระยะทาง
    // ระบบนี้ใช้ข้อมูลจริงจากเกม ARMA เป็นหลัก แทนการคำนวณทางฟิสิกส์
    findBallisticData(distance) {
        const data = this.getCurrentBallisticData();
        if (!data || data.length === 0) return null;

        // กรองข้อมูลที่มี dispersion = "0m" ออก เพราะไม่ควรใช้ในการคำนวณ
        const validData = data.filter(item => item.dispersion !== "0m");

        // หากไม่มีข้อมูลที่ใช้ได้ ให้ใช้ข้อมูลเดิมทั้งหมด
        const dataToUse = validData.length > 0 ? validData : data;

        // ค้นหาข้อมูลที่ใกล้เคียงที่สุดจากตาราง
        let closest = dataToUse[0];
        let minDiff = Math.abs(distance - closest.range);

        for (let item of dataToUse) {
            const diff = Math.abs(distance - item.range);
            if (diff < minDiff) {
                minDiff = diff;
                closest = item;
            }
        }

        // การประมาณค่าแบบ Linear interpolation ระหว่างจุดที่ใกล้เคียง (เหมือน arma-mortar.com)
        const sortedData = dataToUse.sort((a, b) => a.range - b.range);

        // หาจุดข้อมูลที่อยู่ก่อนและหลังระยะเป้าหมาย
        let lower = null;
        let upper = null;

        for (let i = 0; i < sortedData.length - 1; i++) {
            if (distance >= sortedData[i].range && distance <= sortedData[i + 1].range) {
                lower = sortedData[i];
                upper = sortedData[i + 1];
                break;
            }
        }

        // หากมีจุดข้อมูลครอบคลุม ให้ทำการประมาณค่าระหว่างจุด
        if (lower && upper && lower.range !== upper.range) {
            const ratio = (distance - lower.range) / (upper.range - lower.range);

            return {
                range: distance,
                elevation: Math.round(lower.elevation + (upper.elevation - lower.elevation) * ratio),
                timeOfFlight: +(lower.timeOfFlight + (upper.timeOfFlight - lower.timeOfFlight) * ratio).toFixed(1),
                dispersion: lower.dispersion, // ใช้ค่า dispersion ของจุดล่าง
                charge: this.currentCharge
            };
        }

        // หากไม่สามารถประมาณค่าได้ ให้ใช้จุดที่ใกล้ที่สุด
        return {
            ...closest,
            charge: this.currentCharge
        };
    }

    // คำนวณค่าชดเชยมุมยกปืนสำหรับความแตกต่างของระดับความสูง
    // ใช้ค่า dispersion จาก BALLISTIC_DATA เป็นฐานในการคำนวณ
    calculateElevationCorrection(heightDiff, ballisticData) {
        // ตรวจสอบว่ามีข้อมูล ballistic data หรือไม่
        if (!ballisticData || !ballisticData.dispersion) {
            return 0;
        }

        // แปลงค่า dispersion จากรูปแบบ "xxm" เป็นตัวเลข
        const dispersionValue = parseFloat(ballisticData.dispersion.replace('m', ''));

        // ตรวจสอบว่าค่า dispersion เป็น 0 หรือไม่ถูกต้องหรือไม่
        if (isNaN(dispersionValue) || dispersionValue <= 0) {
            return 0;
        }

        // สูตรการคำนวณปรับปรุงใหม่:
        // เมื่อเป้าหมายสูงกว่า (heightDiff > 0): ลดมุมยกปืน (-)
        // เมื่อเป้าหมายต่ำกว่า (heightDiff < 0): เพิ่มมุมยกปืน (+)
        const correction = (dispersionValue / 100) * Math.abs(heightDiff);

        // ใช้ค่าติดลบเมื่อเป้าหมายสูงกว่า และค่าบวกเมื่อเป้าหมายต่ำกว่า
        return heightDiff > 0 ? -Math.round(correction) : Math.round(correction);
    }

    // Advanced ballistic trajectory calculation using physics
    calculateBallisticTrajectory(distance, heightDiff, muzzleVelocity = 70) {
        const g = 9.81; // gravity (m/s²)
        const R = distance; // horizontal range (m)
        const h = heightDiff; // height difference (m)

        // Calculate required launch angle using ballistic trajectory formula
        // R = (v²/g) * sin(2θ) * (1 + √(1 + 2gh/(v²sin²θ)))
        // Simplified approximation for launch angle
        let launchAngle;

        try {
            // First approximation using standard projectile motion
            const discriminant = Math.pow(muzzleVelocity, 4) - g * (g * R * R + 2 * h * muzzleVelocity * muzzleVelocity);

            if (discriminant < 0) {
                // Target too far, use maximum range angle (45°) as fallback
                launchAngle = Math.PI / 4;
            } else {
                // Calculate high angle solution (mortar trajectory)
                const numerator = muzzleVelocity * muzzleVelocity + Math.sqrt(discriminant);
                const denominator = g * R;
                launchAngle = Math.atan(numerator / denominator);
            }

            // Ensure angle is within realistic mortar range (45° to 85°)
            const minAngle = 45 * Math.PI / 180; // 45 degrees
            const maxAngle = 85 * Math.PI / 180; // 85 degrees
            launchAngle = Math.max(minAngle, Math.min(maxAngle, launchAngle));

        } catch (error) {
            // Fallback to standard high angle
            launchAngle = 60 * Math.PI / 180; // 60 degrees default
        }

        // Convert radians to degrees, then to mils
        const angleDegrees = launchAngle * 180 / Math.PI;
        const angleMils = angleDegrees * 17.777777777778;

        // Calculate time of flight using trajectory physics
        const vY = muzzleVelocity * Math.sin(launchAngle);
        const vX = muzzleVelocity * Math.cos(launchAngle);

        // Time to reach target (accounting for height difference)
        const timeOfFlight = (vY + Math.sqrt(vY * vY + 2 * g * h)) / g;

        return {
            elevationMils: Math.round(angleMils),
            elevationDegrees: angleDegrees,
            timeOfFlight: timeOfFlight,
            muzzleVelocity: muzzleVelocity,
            trajectory: this.generateTrajectoryPoints(distance, heightDiff, launchAngle, muzzleVelocity)
        };
    }

    // Generate trajectory points for visualization
    generateTrajectoryPoints(range, heightDiff, launchAngle, muzzleVelocity, numPoints = 50) {
        const g = 9.81;
        const vX = muzzleVelocity * Math.cos(launchAngle);
        const vY = muzzleVelocity * Math.sin(launchAngle);
        const totalTime = (vY + Math.sqrt(vY * vY + 2 * g * heightDiff)) / g;

        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const t = (i / numPoints) * totalTime;
            const x = vX * t;
            const y = vY * t - 0.5 * g * t * t;
            points.push({ x: x, y: y, time: t });
        }

        return points;
    }

    // Enhanced ballistic data finder with physics integration
    findEnhancedBallisticData(distance, heightDiff) {
        const tableData = this.findBallisticData(distance);

        if (!tableData) {
            return null;
        }

        // Get muzzle velocity from charge level (estimated)
        const chargeVelocities = {
            0: 70,   // Charge 0: ~70 m/s
            1: 110,  // Charge 1: ~110 m/s
            2: 150,  // Charge 2: ~150 m/s
            3: 190,  // Charge 3: ~190 m/s
            4: 225   // Charge 4: ~225 m/s
        };

        const muzzleVelocity = chargeVelocities[this.currentCharge] || 150;

        // Calculate physics-based trajectory for reference only
        const physicsResult = this.calculateBallisticTrajectory(distance, heightDiff, muzzleVelocity);

        // Use table data as primary, physics as supplementary info only
        return {
            ...tableData,
            physicsElevation: physicsResult.elevationMils,
            physicsTimeOfFlight: physicsResult.timeOfFlight,
            trajectory: physicsResult.trajectory,
            muzzleVelocity: muzzleVelocity,
            // Keep original table data for accuracy - only add small height correction
            elevation: tableData.elevation, // Use table elevation as-is
            timeOfFlight: tableData.timeOfFlight // Use table time of flight as-is
        };
    }

    // Calculate available RING values that can reach the target distance
    calculateAvailableRings() {
        if (!this.validateInputs()) {
            this.showError('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        const weapon = {
            x: parseInt(this.weaponX.value),
            y: parseInt(this.weaponY.value),
            alt: parseInt(this.weaponAlt.value)
        };

        const target = {
            x: parseInt(this.targetX.value),
            y: parseInt(this.targetY.value),
            alt: parseInt(this.targetAlt.value)
        };

        const distance = this.calculateDistance(weapon.x, weapon.y, target.x, target.y);
        const heightDiff = target.alt - weapon.alt;

        // Apply the same height adjustment formula as in calculate()
        let adjustedDistance = distance;
        const absoluteHeightDiff = Math.abs(heightDiff);
        if (absoluteHeightDiff > 100) {
            const excessHeight = absoluteHeightDiff - 100;
            if (heightDiff > 0) {
                adjustedDistance = distance + excessHeight;
            } else {
                adjustedDistance = distance - excessHeight;
            }
        }

        // เก็บสภาพการยิงปัจจุบันไว้ให้ตัวประเมินประจุใช้ร่วมกัน
        // ส่วน AVAILABLE RINGS กับปุ่มเลือกใต้ Elevation Offset ต้องใช้เกณฑ์เดียวกันเสมอ
        // ไม่งั้นจะขัดกันเอง (อันหนึ่งบอกยิงได้ อีกอันบอกไม่ได้)
        this.lastShotDistance = distance;
        this.lastShotHeightDiff = heightDiff;
        this.lastShotAzimuth = this.calculateAzimuth(weapon.x, weapon.y, target.x, target.y);
        this.lastAdjustedDistance = adjustedDistance;

        const availableRings = this.getRingsForPicker();
        this.displayRingResults(availableRings, adjustedDistance, distance !== adjustedDistance);
        this.ringSection.classList.add('show');
        this.renderRingPickers();
    }

    // Get all available rings/charges and their effective ranges for current shell
    getAvailableRingsForDistance(targetDistance) {
        const shellData = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!shellData) return [];

        const rings = [];

        Object.keys(shellData).forEach(charge => {
            const chargeData = shellData[charge];
            if (!chargeData || chargeData.length === 0) return;

            // Filter out invalid data (dispersion = "0m")
            const validData = chargeData.filter(item => item.dispersion !== "0m");
            if (validData.length === 0) return;

            const minRange = Math.min(...validData.map(item => item.range));
            const maxRange = Math.max(...validData.map(item => item.range));

            const ring = {
                number: parseInt(charge),
                minRange: minRange,
                maxRange: maxRange,
                canReach: targetDistance >= minRange && targetDistance <= maxRange,
                data: validData
            };

            rings.push(ring);
        });

        return rings.sort((a, b) => a.number - b.number);
    }

    // Display RING calculation results
    displayRingResults(rings, targetDistance, wasAdjusted) {
        const texts = LANGUAGE_DATA[currentLanguage];

        if (rings.length === 0) {
            this.ringResults.innerHTML = `
                <div class="ring-no-data">
                    ${texts.noRingsAvailable}
                </div>
            `;
            return;
        }

        let html = '';
        let availableCount = 0;

        const currentRing = this.getCurrentRing();

        rings.forEach(ring => {
            if (ring.canReach) {
                availableCount++;
                const isCurrentRing = currentRing === ring.number;
                html += `
                    <div class="ring-item available ${isCurrentRing ? 'current-ring' : ''}" data-ring="${ring.number}">
                        <div class="ring-label">RING</div>
                        <div class="ring-number">${ring.number}</div>
                        <div class="ring-range">${ring.minRange}m - ${ring.maxRange}m</div>
                    </div>
                `;
            } else {
                // Only show out-of-range rings, not hide them completely
                html += `
                    <div class="ring-item out-of-range" data-ring="${ring.number}">
                        <div class="ring-label">RING</div>
                        <div class="ring-number">${ring.number}</div>
                        <div class="ring-range">${texts.outOfRange}<br>${ring.minRange}m - ${ring.maxRange}m</div>
                    </div>
                `;
            }
        });

        // Add summary information
        const summaryText = wasAdjusted ?
            `${texts.availableRings} ${availableCount}/${rings.length} (${currentLanguage === 'th' ? 'ระยะปรับแล้ว' : 'Adjusted range'}: ${Math.round(targetDistance)}m)` :
            `${texts.availableRings} ${availableCount}/${rings.length} (${Math.round(targetDistance)}m)`;

        html = `
            <div class="ring-summary" style="grid-column: 1 / -1; text-align: center; margin-bottom: 15px; padding: 10px; background: rgba(48, 54, 61, 0.3); border-radius: 6px; color: #fbbf24; font-weight: bold;">
                ${summaryText}
            </div>
            ${html}
        `;

        this.ringResults.innerHTML = html;

        // Add click events to available rings
        this.ringResults.querySelectorAll('.ring-item.available').forEach(item => {
            item.addEventListener('click', () => {
                const ringNumber = parseInt(item.dataset.ring);
                this.selectRing(ringNumber);
            });
        });
    }

    // ตัวเลือกประจุ (RING) ใต้ Elevation Offset — ใช้หน้าตาและตรรกะชุดเดียวกับส่วน AVAILABLE RINGS
    // (ยิงถึง = การ์ดขอบเขียวกดได้, ที่ใช้อยู่ = ไฮไลต์เขียวเข้ม, ยิงไม่ถึง = ทึบกดไม่ได้)
    renderRingPickers() {
        const box = document.getElementById('ring-picker-offset');
        if (!box) return;

        const texts = LANGUAGE_DATA[currentLanguage];
        const th = currentLanguage === 'th';
        const rings = this.getRingsForPicker();
        if (!rings.length) { box.innerHTML = ''; return; }

        const current = this.getCurrentRing();
        const html = rings.map(ring => ring.canReach
            ? `<div class="ring-item available ${current === ring.number ? 'current-ring' : ''}" data-ring="${ring.number}">
                   <div class="ring-label">RING</div>
                   <div class="ring-number">${ring.number}</div>
                   <div class="ring-range">${ring.minRange}m - ${ring.maxRange}m</div>
               </div>`
            : `<div class="ring-item out-of-range" data-ring="${ring.number}">
                   <div class="ring-label">RING</div>
                   <div class="ring-number">${ring.number}</div>
                   <div class="ring-range">${texts.outOfRange}<br>${ring.minRange}m - ${ring.maxRange}m</div>
               </div>`
        ).join('');

        box.innerHTML = `
            <h4 class="ring-picker-title">${th ? '💥 ประจุ (RING)' : '💥 Charge (RING)'}</h4>
            <div class="ring-picker-grid">${html}</div>`;

        box.querySelectorAll('.ring-item.available').forEach(item => {
            item.addEventListener('click', () => this.selectRing(parseInt(item.dataset.ring)));
        });
    }

    // รายการประจุพร้อมสถานะว่า "ใช้ยิงได้จริง" ไหม
    // ต้องผ่านทุกข้อ ไม่งั้นปิดปุ่มไปเลย เพื่อไม่ให้ผู้เล่นกดแล้วเจอคำเตือนทีหลัง:
    //   1) ระยะที่ใช้เปิดตาราง (หลังชดเชยความสูงและลม) ต้องอยู่ในช่วงของประจุนั้น
    //   2) มุมยกสุดท้ายต้องไม่เกินขีดจำกัดฐานปืน 85°
    //   3) ถ้าเปิดโหมดขั้นสูง ต้องยิงถึงจริงตามการจำลองด้วย
    getRingsForPicker() {
        const rings = this.getAvailableRingsForDistance(this.lastAdjustedDistance || 0);
        const sim = this.lastReachableRings;
        const d = this.lastShotDistance, h = this.lastShotHeightDiff, az = this.lastShotAzimuth;
        if (d === undefined) return rings;

        return rings.map(r => {
            let ok = this.isRingUsable(r.number, d, h, az);
            if (ok && sim) ok = sim.indexOf(r.number) !== -1;
            return Object.assign({}, r, { canReach: ok });
        });
    }

    // จำลองสิ่งที่วิธีตารางจะทำถ้าใช้ประจุนี้ แล้วดูว่าผลออกมาใช้ได้ไหม
    isRingUsable(ring, distance, heightDiff, azimuthDeg) {
        const rows = (BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell]?.[ring] || [])
            .filter(r => r.dispersion !== '0m');
        if (!rows.length) return false;

        // ระยะและความสูงที่ใช้คำนวณ — สูตรเดียวกับใน calculate()
        let adjD = distance, adjH = heightDiff;
        const abs = Math.abs(heightDiff);
        if (abs > 100) {
            const excess = abs - 100;
            adjD = heightDiff > 0 ? distance + excess : distance - excess;
            adjH = heightDiff > 0 ? 100 : -100;
        }
        if (this.gameWind && this.gameWind.speed > 0) {
            const w = this.computeWindAdjustment(adjD, azimuthDeg, ring);
            if (w) adjD += w.deltaRange;
        }

        // 1) ต้องอยู่ในช่วงระยะของประจุนี้
        const sorted = rows.slice().sort((a, b) => a.range - b.range);
        if (adjD < sorted[0].range || adjD > sorted[sorted.length - 1].range) return false;

        // 2) มุมยกสุดท้ายต้องตั้งได้จริงบนฐานปืน
        let row = sorted[sorted.length - 1];
        for (let i = 0; i < sorted.length - 1; i++) {
            const a = sorted[i], b = sorted[i + 1];
            if (adjD >= a.range && adjD <= b.range) {
                const t = (b.range - a.range) ? (adjD - a.range) / (b.range - a.range) : 0;
                row = { range: adjD, elevation: a.elevation + (b.elevation - a.elevation) * t, dispersion: a.dispersion };
                break;
            }
        }
        const finalElev = Math.round(row.elevation) + this.calculateElevationCorrection(adjH, row) + this.elevationOffset;
        return finalElev <= Math.round(this.degreesToMils(this.getElevLimits().max));
    }

    // Get the current ring being used
    // RING 0 เป็นประจุจริงของ M821 / 0-832Ay / A-832AY จึงห้ามใช้ `|| 1` (0 เป็นค่าเท็จใน JS)
    getCurrentRing() {
        return Number.isFinite(this.currentCharge) ? this.currentCharge : 1;
    }

    // Select a specific ring and recalculate
    selectRing(ringNumber) {
        this.currentCharge = ringNumber;
        this.manualRingSelected = true; // Flag to indicate manual selection
        this.updateChargeTabsDisplay();
        this.loadBallisticData();

        // Recalculate with selected ring
        if (this.validateInputs()) {
            this.calculate();
        }

        // Show success message
        const texts = LANGUAGE_DATA[currentLanguage];
        this.showMessage(`${currentLanguage === 'th' ? 'เลือก Ring' : 'Selected Ring'} ${ringNumber}`, 'success');
    }

    // Apply Numpad Reference values to target coordinates
    applyNumpadReference(numpadValue) {
        // Check if target coordinates have at least 3 digits
        if (!this.targetX.value || !this.targetY.value) {
            this.showError(currentLanguage === 'th' ?
                'กรุณากรอกพิกัดเป้าหมาย X และ Y ก่อน' :
                'Please enter target X and Y coordinates first');
            return;
        }

        const currentX = this.targetX.value.toString();
        const currentY = this.targetY.value.toString();

        // Check minimum 3 digits requirement
        if (currentX.length < 3 || currentY.length < 3) {
            this.showError(currentLanguage === 'th' ?
                'พิกัดต้องมีตัวเลขอย่างน้อย 3 ตัวขึ้นไป' :
                'Coordinates must have at least 3 digits');
            return;
        }

        // Define Numpad Reference values
        const numpadMap = {
            1: { x: 15, y: 15 },
            2: { x: 50, y: 15 },
            3: { x: 85, y: 15 },
            4: { x: 15, y: 50 },
            5: { x: 50, y: 50 },
            6: { x: 85, y: 50 },
            7: { x: 15, y: 85 },
            8: { x: 50, y: 85 },
            9: { x: 85, y: 85 }
        };

        const newValues = numpadMap[numpadValue];
        if (!newValues) return;

        let newX, newY;

        // Process X coordinate
        if (currentX.length === 3) {
            // Add 2 digits at the end
            newX = currentX + newValues.x.toString().padStart(2, '0');
        } else if (currentX.length === 4) {
            // Replace 4th digit and add 5th digit
            newX = currentX.substring(0, 3) + newValues.x.toString().padStart(2, '0');
        } else if (currentX.length === 5) {
            // Replace 4th and 5th digits
            newX = currentX.substring(0, 3) + newValues.x.toString().padStart(2, '0');
        } else {
            // More than 5 digits - just replace last 2 digits
            newX = currentX.substring(0, currentX.length - 2) + newValues.x.toString().padStart(2, '0');
        }

        // Process Y coordinate
        if (currentY.length === 3) {
            // Add 2 digits at the end
            newY = currentY + newValues.y.toString().padStart(2, '0');
        } else if (currentY.length === 4) {
            // Replace 4th digit and add 5th digit
            newY = currentY.substring(0, 3) + newValues.y.toString().padStart(2, '0');
        } else if (currentY.length === 5) {
            // Replace 4th and 5th digits
            newY = currentY.substring(0, 3) + newValues.y.toString().padStart(2, '0');
        } else {
            // More than 5 digits - just replace last 2 digits
            newY = currentY.substring(0, currentY.length - 2) + newValues.y.toString().padStart(2, '0');
        }

        // Ensure we don't exceed 5 digits (99999 maximum) but preserve leading zeros
        const maxX = Math.min(parseInt(newX), 99999);
        const maxY = Math.min(parseInt(newY), 99999);

        // Pad with zeros to maintain original length or minimum required length
        const targetLengthX = Math.max(currentX.length, newX.length);
        const targetLengthY = Math.max(currentY.length, newY.length);

        newX = maxX.toString().padStart(Math.min(targetLengthX, 5), '0');
        newY = maxY.toString().padStart(Math.min(targetLengthY, 5), '0');

        // Update the input fields
        this.targetX.value = newX;
        this.targetY.value = newY;

        // เขียนค่าลงช่องตรง ๆ จะไม่เกิด event 'input' จึงต้องล้างการล็อกประจุเองที่นี่
        // (เป้าหมายใหม่อาจอยู่คนละระยะจนประจุเดิมยิงไม่ถึง)
        this.manualRingSelected = false;

        // Trigger update events
        this.updateGridReferences();
        this.updateActivePresetStatus();

        // Auto-calculate if inputs are valid
        if (this.validateInputs()) {
            this.calculate();
        }

        // Update numpad highlighting
        this.updateNumpadHighlight();

        // Show success message
        this.showMessage(currentLanguage === 'th' ?
            `ปรับพิกัดตาม Numpad ${numpadValue} เรียบร้อยแล้ว` :
            `Applied Numpad ${numpadValue} reference successfully`, 'success');
    }

    // Update numpad highlighting based on current coordinates
    updateNumpadHighlight() {
        // Clear all highlights first
        this.numpadButtons.forEach(btn => {
            btn.classList.remove('numpad-active');
        });

        // Check if we have target coordinates
        if (!this.targetX.value || !this.targetY.value) {
            return;
        }

        const currentX = this.targetX.value.toString();
        const currentY = this.targetY.value.toString();

        // Need at least 4 digits to check last 2 digits
        if (currentX.length < 4 || currentY.length < 4) {
            return;
        }

        // Get last 2 digits from both coordinates
        const lastTwoX = currentX.slice(-2);
        const lastTwoY = currentY.slice(-2);

        // Define the numpad mapping
        const numpadMap = {
            1: { x: '15', y: '15' },
            2: { x: '50', y: '15' },
            3: { x: '85', y: '15' },
            4: { x: '15', y: '50' },
            5: { x: '50', y: '50' },
            6: { x: '85', y: '50' },
            7: { x: '15', y: '85' },
            8: { x: '50', y: '85' },
            9: { x: '85', y: '85' }
        };

        // Find matching numpad button
        for (let [numpad, coords] of Object.entries(numpadMap)) {
            if (coords.x === lastTwoX && coords.y === lastTwoY) {
                const matchingBtn = document.querySelector(`[data-numpad="${numpad}"]`);
                if (matchingBtn) {
                    matchingBtn.classList.add('numpad-active');
                }
                break;
            }
        }
    }

    calculate() {
        if (!this.validateInputs()) {
            this.showError('Please fill in all fields with valid numbers (Grid: 0-99999, max 5 digits)');
            return;
        }

        const weapon = {
            x: parseInt(this.weaponX.value),
            y: parseInt(this.weaponY.value),
            alt: parseInt(this.weaponAlt.value)
        };

        const target = {
            x: parseInt(this.targetX.value),
            y: parseInt(this.targetY.value),
            alt: parseInt(this.targetAlt.value)
        };

        // คำนวณระยะทางและทิศทางโดยใช้พิกัดตาราง (Grid Coordinates)
        const distance = this.calculateDistance(weapon.x, weapon.y, target.x, target.y);
        const azimuthDegrees = this.calculateAzimuth(weapon.x, weapon.y, target.x, target.y);
        const azimuthMils = this.degreesToMils(azimuthDegrees);

        // คำนวณความแตกต่างของระดับความสูงระหว่างปืนกับเป้าหมาย
        const heightDiff = target.alt - weapon.alt;

        // สูตรการปรับปรุงระยะทางและความสูงเมื่อความต่างความสูงเกิน 100 เมตร
        let adjustedDistance = distance;
        let adjustedHeightDiff = heightDiff;
        let calculationNote = '';

        const absoluteHeightDiff = Math.abs(heightDiff);
        if (absoluteHeightDiff > 100) {
            // ส่วนที่เกิน 100 เมตร
            const excessHeight = absoluteHeightDiff - 100;
            // นำส่วนเกินไปบวกหรือลบกับระยะทาง (ไม่ปัด)
            const rangeAdjustment = excessHeight;
            let sign = heightDiff > 0 ? '+' : '-';
            if (heightDiff > 0) {
                adjustedDistance = distance + rangeAdjustment;
            } else {
                adjustedDistance = distance - rangeAdjustment;
            }
            // ความต่างความสูงที่ใช้คำนวณ = 100 หรือ -100 เท่านั้น
            adjustedHeightDiff = heightDiff > 0 ? 100 : -100;
            calculationNote = `สูตรปรับแล้ว: ระยะทาง ${distance}m ${sign} ${rangeAdjustment}m = ${adjustedDistance}m, ความสูง ${adjustedHeightDiff}m (ตัดไว้ 100m)`;
        }

        // ลมในเกม (native wind) — ใช้ตารางค่าแก้จริง แบบเดียวกับ arma-mortar.com
        const windActive = (this.gameWind && this.gameWind.speed > 0) && !!this.getWindTableForCurrentShell();

        // Apply ACE Weather adjustments (range, azimuth, elevation tweak)
        // หมายเหตุ: เมื่อใช้ลมในเกมอยู่ จะข้ามส่วน "ลม" ของ ACE เพื่อไม่ให้ชดเชยซ้ำ (ยังคงผลจากความหนาแน่นอากาศ)
        let weatherAdjust = null;
        if (this.enableAceWeather) {
            weatherAdjust = this.applyAceWeatherAdjustments(adjustedDistance, azimuthDegrees);
            if (!windActive) {
                adjustedDistance = adjustedDistance + weatherAdjust.deltaRange; // may be +/-
            }
        }

        // คำนวณค่าชดเชยลมในเกม: แก้ระยะเล็งตามลมต้าน/ตาม แล้วค่อยเปิดตารางยิง
        let windAdjust = null;
        if (windActive) {
            // หา ring ที่จะใช้เปิดตารางลม (ตาม ring ที่เลือกไว้ หรือ ring อัตโนมัติจากระยะ)
            let ringForWind = this.manualRingSelected ? this.currentCharge : this.selectOptimalCharge(adjustedDistance);
            windAdjust = this.computeWindAdjustment(adjustedDistance, azimuthDegrees, ringForWind);

            // ถ้าระยะหลังชดเชยลมทำให้ ring อัตโนมัติเปลี่ยน ให้คำนวณใหม่ด้วย ring นั้น
            if (windAdjust && !this.manualRingSelected) {
                const ringAfterWind = this.selectOptimalCharge(adjustedDistance + windAdjust.deltaRange);
                if (ringAfterWind !== ringForWind) {
                    windAdjust = this.computeWindAdjustment(adjustedDistance, azimuthDegrees, ringAfterWind);
                }
            }
            if (windAdjust) {
                adjustedDistance = adjustedDistance + windAdjust.deltaRange;
            }
        }
        this.lastWindAdjust = windAdjust;

        // เลือกประจุที่เหมาะสมตามระยะทางที่ปรับแล้ว (เว้นแต่ผู้ใช้เลือกเอง)
        if (!this.manualRingSelected) {
            const optimalCharge = this.selectOptimalCharge(adjustedDistance);
            if (optimalCharge !== this.currentCharge) {
                this.currentCharge = optimalCharge;
                this.updateChargeTabsDisplay();
                // ต้องโหลดตารางของประจุใหม่ด้วย ไม่งั้นตารางด้านล่างจะเป็นคนละประจุกับคำตอบที่แสดง
                // และแถวที่ไฮไลต์จะเป็นแถวของประจุเก่า
                this.loadBallisticData();
            }
        }

        // ค้นหาข้อมูลการยิงจากตาราง BALLISTIC_DATA ใช้ระยะทางที่ปรับแล้ว
        const ballisticData = this.findBallisticData(adjustedDistance);
        if (!ballisticData) {
            this.showError('ไม่มีข้อมูลการยิงสำหรับการตั้งค่านี้');
            return;
        }

        // ตรวจว่าระยะที่ใช้เปิดตารางอยู่นอกช่วงของประจุนี้หรือไม่
        // findBallisticData จะหนีบค่าไปที่แถวใกล้สุดเงียบ ๆ ทำให้ได้คำตอบที่ดูปกติทั้งที่ยิงไม่ถึงจริง
        let outOfTable = null;
        const rangeRows = (this.getCurrentBallisticData() || []).filter(r => r.dispersion !== '0m');
        if (rangeRows.length) {
            const rMin = Math.min(...rangeRows.map(r => r.range));
            const rMax = Math.max(...rangeRows.map(r => r.range));
            if (adjustedDistance < rMin || adjustedDistance > rMax) {
                outOfTable = { min: rMin, max: rMax, used: Math.round(adjustedDistance) };
            }
        }

        // คำนวณค่าชดเชยมุมยกปืนจากความต่างระดับความสูงที่ปรับแล้ว
        // ใช้สูตร: (dispersion ÷ 100) × ความต่างระดับความสูงที่ปรับแล้ว
        const elevationCorrection = this.calculateElevationCorrection(adjustedHeightDiff, ballisticData);

        // ใช้ข้อมูลจากตารางโดยตรงโดยไม่ปรับค่า (วิธีมาตรฐานของเครื่องคำนวณมอร์ต้าร์)
        // ข้อมูลในตารางถูกปรับเทียบสำหรับ ARMA แล้ว
        const adjustedBaseElevation = Math.round(ballisticData.elevation * 1.00);
        // Add small elevation tweak from air density (if enabled)
        const weatherElev = this.enableAceWeather && weatherAdjust ? Math.round(weatherAdjust.deltaElevMils) : 0;
        const finalElevation = adjustedBaseElevation + elevationCorrection + this.elevationOffset + weatherElev;

        // Display results (simplified like arma-mortar.com)
        // Azimuth with crosswind deflection (mils -> degrees)
        // - ลมในเกม: ใช้ค่าแก้จากตาราง (Zw) / ACE: ใช้ค่าประมาณ (เฉพาะเมื่อไม่ได้ใช้ลมในเกม)
        const aceDeflectMils = (!windActive && this.enableAceWeather && weatherAdjust) ? weatherAdjust.deflectionMils : 0;
        const windDeflectMils = windAdjust ? windAdjust.deflectMils : 0;
        const deflectMils = aceDeflectMils + windDeflectMils;
        const finalAzimuthMils = Math.round(azimuthMils + deflectMils);
        const finalAzimuthDeg = (azimuthDegrees + this.milsToDegrees(deflectMils)).toFixed(1);

        // คำนวณโหมดขั้นสูงก่อนแสดงผล เพราะถ้าเปิดอยู่ ค่าหลักในช่อง FIRING SOLUTION
        // ต้องใช้ผลจากการจำลองวิถีจริง ไม่ใช่ค่าจากตาราง
        const tableCharge = this.currentCharge;
        let advResult = null;
        if (this.enableAdvanced) {
            advResult = this.computeAdvancedSolution(distance, heightDiff, azimuthDegrees);
        }

        this.displayResults({
            distance: Math.round(distance),
            adjustedDistance: Math.round(adjustedDistance),
            azimuthDegrees: finalAzimuthDeg,
            azimuthMils: finalAzimuthMils,
            baseAzimuthMils: Math.round(azimuthMils),
            elevation: finalElevation,
            originalElevation: ballisticData.elevation,
            elevationCorrection: elevationCorrection,
            elevationOffset: this.elevationOffset,
            weatherElevation: weatherElev,
            charge: this.currentCharge,
            timeOfFlight: ballisticData.timeOfFlight,
            heightDiff: heightDiff,
            adjustedHeightDiff: adjustedHeightDiff,
            dispersion: ballisticData.dispersion,
            muzzleVelocity: ballisticData.muzzleVelocity || 150,
            trajectory: ballisticData.trajectory || [],
            calculationNote: calculationNote,
            outOfTable: outOfTable,
            // ฐานปืนในเกมยกได้ 45°–85° (Mortar_Base.et: LimitsVert 45 85)
            // ค่าแก้ความสูงแบบเชิงเส้นของวิธีตารางบวกทับจนทะลุ 85° ได้ (บางกรณีเกิน 90° ด้วยซ้ำ)
            overMountLimit: (() => {
                const maxMils = Math.round(this.degreesToMils(this.getElevLimits().max));
                return finalElevation > maxMils ? { max: maxMils } : null;
            })(),
            isAdjusted: adjustedDistance !== distance || adjustedHeightDiff !== heightDiff || !!weatherAdjust || !!windAdjust,
            gameWind: windAdjust ? {
                enabled: true,
                speed: this.gameWind.speed,
                dirFrom: this.gameWind.dirFrom,
                headwind: windAdjust.headwind,
                crosswind: windAdjust.crosswind,
                deltaRange: windAdjust.deltaRange,
                deflectMils: windAdjust.deflectMils,
                wc: windAdjust.wc,
                wl: windAdjust.wl
            } : { enabled: false },
            aceWeather: this.enableAceWeather ? {
                enabled: true,
                windSkipped: windActive, // ลม ACE ถูกข้ามเพราะใช้ลมในเกมแทน
                headwind: (!windActive && weatherAdjust) ? weatherAdjust.headwind : 0,
                crosswind: (!windActive && weatherAdjust) ? weatherAdjust.crosswind : 0,
                deltaRange: (!windActive && weatherAdjust) ? weatherAdjust.deltaRange : 0,
                deflectionMils: (!windActive && weatherAdjust) ? weatherAdjust.deflectionMils : 0,
                deltaElevMils: weatherAdjust ? weatherAdjust.deltaElevMils : 0,
                rho: weatherAdjust ? weatherAdjust.rho : null,
                densityRatioDelta: weatherAdjust ? weatherAdjust.densityRatioDelta : null
            } : { enabled: false },
            advanced: advResult,
            tableCharge: tableCharge
        });

        // อัปเดตสถานะลมใต้หน้าปัด
        this.updateWindStatus();

        // Highlight table row
        this.highlightTableRow(ballisticData.range);

        // โหมดคำนวณขั้นสูง — คำนวณแยกจากวิธีตารางโดยสิ้นเชิง ใช้ระยะและความสูงจริง
        if (advResult) {
            this.displayAdvancedSolution(advResult, {
                elevation: finalElevation,
                azimuthMils: finalAzimuthMils,
                timeOfFlight: ballisticData.timeOfFlight,
                charge: tableCharge
            });
        }

        // ประจุที่ยิงถึงเป้าหมายนี้จริง ๆ ใช้ปิดปุ่มที่ใช้ไม่ได้
        // ผลจากการจำลองแม่นกว่า (คิดความสูงและลมด้วย) ถ้าไม่มีก็ใช้ช่วงระยะจากตารางแทน
        this.lastAdjustedDistance = adjustedDistance;
        this.lastShotDistance = distance;
        this.lastShotHeightDiff = heightDiff;
        this.lastShotAzimuth = azimuthDegrees;
        this.lastReachableRings = (advResult && advResult.viableRings) ? advResult.viableRings : null;

        // อัปเดตปุ่มเลือกประจุ (ประจุอาจถูกเลือกใหม่อัตโนมัติในรอบนี้)
        this.renderRingPickers();
    }

    displayResults(results) {
        // เปิดโหมดขั้นสูงและคำนวณสำเร็จ -> ค่าหลักใช้ผลจากการจำลองวิถีจริง
        // (แม่นกว่าเมื่อความสูงต่างกันมาก ส่วนค่าจากตารางยังดูได้ในตารางเทียบด้านล่าง)
        const adv = (results.advanced && results.advanced.available) ? results.advanced : null;
        const shown = adv ? {
            elevation: adv.elevationMils,
            azimuthMils: adv.azimuthMils,
            azimuthDegrees: this.milsToDegrees(adv.azimuthMils).toFixed(1),
            charge: adv.ring,
            timeOfFlight: adv.timeOfFlight.toFixed(1)
        } : results;
        results.shown = shown;
        this.updateCalcMethodBadge(!!adv);

        this.distanceEl.textContent = `${results.distance} m`;
        this.azimuthEl.textContent = `${shown.azimuthMils} mils (${shown.azimuthDegrees}°)`;

        // Display elevation with offset info if offset is not zero
        let elevationText = `${shown.elevation} mils`;
        if (results.elevationOffset && results.elevationOffset !== 0) {
            const texts = LANGUAGE_DATA[currentLanguage];
            elevationText += `\n(${texts.offsetLabel} ${results.elevationOffset > 0 ? '+' : ''}${results.elevationOffset} mils)`;
        }
        this.elevationEl.textContent = elevationText;

        this.chargeEl.textContent = `${shown.charge}`;
        this.timeFlightEl.textContent = `${shown.timeOfFlight} sec`;
        this.heightDiffEl.textContent = `${results.heightDiff > 0 ? '+' : ''}${results.heightDiff.toFixed(1)} m`;

        // Update fixed bottom firing solution bar
        this.updateFixedFiringSolution(results);

        // Add additional info
        this.updateAdditionalInfo(results);

        this.resultsSection.classList.add('show');

        // Auto-show RING section when results are displayed
        if (this.ringSection) {
            this.ringSection.classList.add('show');
            // Auto-calculate rings for convenience
            setTimeout(() => this.calculateAvailableRings(), 100);
        }
    }

    // ป้ายบอกว่าค่าหลักที่แสดงมาจากวิธีไหน
    updateCalcMethodBadge(useSim) {
        const el = document.getElementById('calc-method-badge');
        if (!el) return;
        const th = currentLanguage === 'th';
        el.textContent = useSim ? (th ? '🧪 จำลองวิถี' : '🧪 SIMULATED') : (th ? '📋 ตาราง' : '📋 TABLE');
        el.className = 'mortar-badge method-badge' + (useSim ? ' method-sim' : '');
    }

    updateFixedFiringSolution(results) {
        const fixedBar = document.getElementById('fixed-firing-solution');
        if (!fixedBar) return;

        // ใช้ชุดค่าเดียวกับส่วน FIRING SOLUTION ด้านบน (จำลองถ้าเปิดโหมดขั้นสูง)
        const shown = results.shown || results;

        document.getElementById('fs-distance').textContent = `${results.distance} m`;
        document.getElementById('fs-azimuth').textContent = `${shown.azimuthMils} mils (${shown.azimuthDegrees}°)`;

        let elevationText = `${shown.elevation} mils`;
        if (results.elevationOffset && results.elevationOffset !== 0) {
            const texts = LANGUAGE_DATA[currentLanguage];
            elevationText += `\n(${texts.offsetLabel} ${results.elevationOffset > 0 ? '+' : ''}${results.elevationOffset})`;
        }
        document.getElementById('fs-elevation').textContent = elevationText;

        document.getElementById('fs-charge').textContent = `${shown.charge}`;
        document.getElementById('fs-time').textContent = `${shown.timeOfFlight} sec`;
        document.getElementById('fs-height').textContent = `${results.heightDiff > 0 ? '+' : ''}${results.heightDiff.toFixed(1)} m`;

        // Show the bar with animation
        fixedBar.classList.add('active');
    }

    updateAdditionalInfo(results) {
        const additionalInfo = document.getElementById('additional-info');

        // เปิดโหมดขั้นสูงแล้วไม่ต้องแสดงรายละเอียดการคำนวณของวิธีตาราง
        // (ค่าแก้ความสูงเชิงเส้น, ระยะที่ถูกปรับ, สูตรชดเชย ฯลฯ) เพราะคำตอบที่ใช้จริงมาจากการจำลอง
        if (this.enableAdvanced) {
            additionalInfo.innerHTML = '';
            additionalInfo.style.display = 'none';
            return;
        }
        additionalInfo.style.display = '';

        // คำนวณค่า dispersion ที่ใช้ในการคำนวณ elevation correction
        const dispersionValue = parseFloat(results.dispersion.replace('m', ''));
        const correctionFormula = `(${dispersionValue} ÷ 100) × |${results.adjustedHeightDiff || results.heightDiff}| = ${Math.abs(results.elevationCorrection)} mils ${(results.adjustedHeightDiff || results.heightDiff) < 0 ? '(+)' : '(-)'}`;

        // Check if calculation was adjusted
        const originalHeightCompensation = Math.abs(results.heightDiff);
        const showWarning = originalHeightCompensation > 100;
        const wasAdjusted = results.isAdjusted;

        // Get text from current language
        const texts = LANGUAGE_DATA[currentLanguage];

        additionalInfo.innerHTML = `
            ${results.overMountLimit ? `
            <div class="out-of-table-warning">
                <div class="warning-header">
                    <span class="warning-icon">⛔</span>
                    <strong>${currentLanguage === 'th' ? 'มุมยกเกินขีดจำกัดของฐานปืน' : 'Elevation exceeds the mount limit'}</strong>
                </div>
                <div class="warning-text">
                    ${currentLanguage === 'th'
                ? `ได้ ${results.elevation} mils แต่ฐานปืนในเกมยกได้สูงสุด ${results.overMountLimit.max} mils (85°) — ตั้งค่านี้ไม่ได้จริง เกิดจากค่าแก้ความสูงแบบเชิงเส้นบวกทับจนเกินจริง`
                : `Got ${results.elevation} mils but the in-game mount tops out at ${results.overMountLimit.max} mils (85°) — this cannot be set on the weapon; the linear height correction has overshot`}
                </div>
            </div>
            ` : ''}
            ${results.outOfTable ? `
            <div class="out-of-table-warning">
                <div class="warning-header">
                    <span class="warning-icon">⛔</span>
                    <strong>${currentLanguage === 'th' ? 'ระยะอยู่นอกตารางของประจุนี้' : 'Distance is outside this charge\'s table'}</strong>
                </div>
                <div class="warning-text">
                    ${currentLanguage === 'th'
                ? `RING ${this.currentCharge} ครอบคลุม ${results.outOfTable.min}–${results.outOfTable.max} m แต่ระยะที่ใช้คำนวณคือ ${results.outOfTable.used} m — ค่าที่แสดงถูกหนีบไว้ที่แถวใกล้สุด ใช้ยิงจริงไม่ได้`
                : `RING ${this.currentCharge} covers ${results.outOfTable.min}–${results.outOfTable.max} m but the calculation used ${results.outOfTable.used} m — the values shown are clamped to the nearest row and are not a valid firing solution`}
                </div>
            </div>
            ` : ''}
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'กระสุน:' : 'Shell:'}</strong> ${this.currentShell}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ประเภทมอร์ต้าร์:' : 'Mortar Type:'}</strong> ${this.currentMortarType === 'mod' ? 'MOD Adult Mortars' : 'Original Game'}
            </div>
            <div class="info-item mil-system-info">
                <strong>🧭 ${currentLanguage === 'th' ? 'ระบบ Mils:' : 'Mils System:'}</strong> 
                ${this.getShellMilliradianSystem() === 'russian' ?
                `${currentLanguage === 'th' ? 'รัสเซีย' : 'Russian'} (6000 mils = 360°)` :
                `NATO (6400 mils = 360°)`
            }
            </div>
            ${results.gameWind && results.gameWind.enabled ? `
            <div class="info-item">
                <strong>🌬️ ${currentLanguage === 'th' ? 'ลมในเกม:' : 'In-game Wind:'}</strong>
                ${results.gameWind.speed} m/s ${currentLanguage === 'th' ? 'พัดมาจาก' : 'from'} ${results.gameWind.dirFrom}°
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ชดเชยลม (จากตารางยิง):' : 'Wind Correction (from firing table):'}</strong>
                ${currentLanguage === 'th' ? 'ลมต้าน/ตาม' : 'Head/Tail'}: ${results.gameWind.headwind.toFixed(1)} m/s,
                ${currentLanguage === 'th' ? 'ลมขวาง' : 'Crosswind'}: ${results.gameWind.crosswind.toFixed(1)} m/s,
                ΔRange: ${Math.round(results.gameWind.deltaRange)} m,
                ΔAzimuth: ${Math.round(results.gameWind.deflectMils)} mils ${Math.round(results.gameWind.deflectMils) > 0 ? (currentLanguage === 'th' ? '(ขวา)' : '(right)') : Math.round(results.gameWind.deflectMils) < 0 ? (currentLanguage === 'th' ? '(ซ้าย)' : '(left)') : ''}
            </div>
            ` : ''}
            ${results.aceWeather && results.aceWeather.enabled ? `
            <div class="info-item">
                <strong>🌦️ ACE Weather:</strong> ${currentLanguage === 'th' ? 'เปิด' : 'On'}${results.aceWeather.windSkipped ? ` — ${currentLanguage === 'th' ? 'ส่วนลมของ ACE ถูกข้าม (ใช้ลมในเกมแทน)' : 'ACE wind skipped (using in-game wind)'}` : ''}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ชดเชยจากลม:' : 'Wind Adjustments:'}</strong>
                ${currentLanguage === 'th' ? 'เฮดวินด์' : 'Headwind'}: ${results.aceWeather.headwind.toFixed(1)} m/s,
                ${currentLanguage === 'th' ? 'ครอสวินด์' : 'Crosswind'}: ${results.aceWeather.crosswind.toFixed(1)} m/s,
                ΔRange: ${Math.round(results.aceWeather.deltaRange)} m,
                ΔAzimuth: ${results.aceWeather.deflectionMils.toFixed(1)} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ชดเชยความหนาแน่นอากาศ:' : 'Air Density Adjustment:'}</strong>
                ρ: ${(results.aceWeather.rho || 0).toFixed(3)} kg/m³, ΔElev: ${Math.round(results.aceWeather.deltaElevMils)} mils
            </div>
            ` : `
            <div class="info-item">
                <strong>🌦️ ACE Weather:</strong> ${currentLanguage === 'th' ? 'ปิด' : 'Off'}
            </div>
            `}
            ${wasAdjusted ? `
            <div class="info-item calculation-adjustment">
                <strong>🔧 ${currentLanguage === 'th' ? 'การปรับปรุงการคำนวณ:' : 'Calculation Adjustment:'}</strong>
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ระยะทางเดิม:' : 'Original Distance:'}</strong> ${results.distance} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ระยะทางที่ใช้คำนวณ:' : 'Calculation Distance:'}</strong> ${results.adjustedDistance} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ความสูงเดิม:' : 'Original Height Diff:'}</strong> ${results.heightDiff > 0 ? '+' : ''}${results.heightDiff} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ความสูงที่ใช้คำนวณ:' : 'Calculation Height Diff:'}</strong> ${results.adjustedHeightDiff > 0 ? '+' : ''}${results.adjustedHeightDiff} m
            </div>
            <div class="info-item calculation-note">
                <em>${results.calculationNote}</em>
            </div>
            ` : ''}
            <div class="info-item physics-info">
                <strong>📊 ${currentLanguage === 'th' ? 'ข้อมูลการคำนวณจาก BALLISTIC_DATA:' : 'Calculation Data from BALLISTIC_DATA:'}</strong>
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'มุมยกปืนจากตาราง:' : 'Table Elevation:'}</strong> ${results.originalElevation} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ค่า Dispersion:' : 'Dispersion:'}</strong> ${results.dispersion}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'สูตรการชดเชยมุมยก:' : 'Elevation Correction Formula:'}</strong> ${correctionFormula}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ค่าชดเชยมุมยก:' : 'Elevation Correction:'}</strong> ${results.elevationCorrection > 0 ? '+' : ''}${results.elevationCorrection} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ค่าออฟเซ็ตผู้ใช้:' : 'User Offset:'}</strong> ${results.elevationOffset > 0 ? '+' : ''}${results.elevationOffset} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'มุมยกปืนสุดท้าย:' : 'Final Elevation:'}</strong> ${results.elevation} mils
                ${results.elevationOffset !== 0 ?
                `<span class="offset-indicator" style="color: ${results.elevationOffset > 0 ? '#10b981' : '#ef4444'}; font-weight: bold;">
                        (${results.originalElevation} ${results.elevationCorrection > 0 ? '+' : ''}${results.elevationCorrection} ${results.elevationOffset > 0 ? '+' : ''}${results.elevationOffset})
                    </span>` : ''
            }
            </div>
            ${showWarning ? `
            <div class="accuracy-warning">
                <div class="warning-header">
                    <span class="warning-icon">⚠️</span>
                    <strong>${currentLanguage === 'th' ? 'การปรับปรุงความแม่นยำ' : 'Accuracy Improvement'}</strong>
                </div>
                <div class="warning-text">
                    ${currentLanguage === 'th' ?
                    'ใช้สูตรพิเศษเมื่อความต่างความสูง > 100m เพื่อลดความคลาดเคลื่อน' :
                    'Using special formula when height difference > 100m to reduce deviation'
                }
                </div>
            </div>
            ` : ''}
            <div class="trajectory-hint">
                🎯 ${currentLanguage === 'th' ?
                (wasAdjusted ? 'ใช้สูตรปรับปรุงสำหรับความแม่นยำสูง' : 'ใช้ข้อมูลจาก BALLISTIC_DATA เป็นหลัก พร้อมค่าชดเชยจากความสูง') :
                (wasAdjusted ? 'Using improved formula for high accuracy' : 'Using BALLISTIC_DATA with height compensation')
            }
            </div>
        `;
    }

    highlightTableRow(range) {
        const rows = document.querySelectorAll('#ballistic-tbody tr');
        rows.forEach(row => row.classList.remove('highlighted'));
        if (!rows.length || !isFinite(range)) return;

        // ระยะที่ส่งเข้ามาเป็นค่าทศนิยมจากการประมาณค่า จึงไม่มีวันตรงกับ data-range แบบเป๊ะ ๆ
        // เลือกแถวที่ใกล้ที่สุดแทน และไม่เลื่อนหน้าจอตามเอง (เดิมกระตุกทุกครั้งที่พิมพ์)
        let best = null, bestDiff = Infinity;
        rows.forEach(row => {
            const r = parseFloat(row.dataset.range);
            if (!isFinite(r)) return;
            const d = Math.abs(r - range);
            if (d < bestDiff) { bestDiff = d; best = row; }
        });
        if (best) best.classList.add('highlighted');
    }

    showError(message) {
        // Simple error display - could be enhanced with a proper toast system
        alert(message);
    }

    // Target Preset Management Functions
    saveTargetPreset(presetNumber) {
        // Get current target values including elevation offset
        const targetData = {
            x: this.targetX.value,
            y: this.targetY.value,
            alt: this.targetAlt.value,
            elevationOffset: this.elevationOffset || 0,
            timestamp: new Date().getTime()
        };

        // Validate that we have data to save
        if (!targetData.x || !targetData.y || !targetData.alt) {
            this.showMessage(LANGUAGE_DATA[currentLanguage].presetSavedMessage.replace('{0}', presetNumber) + ' - กรุณากรอกข้อมูลเป้าหมายให้ครบ', 'warning');
            return;
        }

        // Save to memory and localStorage
        this.targetPresets[presetNumber] = targetData;
        localStorage.setItem('mortarTargetPresets', JSON.stringify(this.targetPresets));

        // Update button appearance
        this.updatePresetButtonStatus(presetNumber);

        // Update active preset status
        this.updateActivePresetStatus();

        // Show success message with offset info
        const texts = LANGUAGE_DATA[currentLanguage];
        let message = texts.presetSavedMessage.replace('{0}', presetNumber);
        if (this.elevationOffset !== 0) {
            message += ` (${texts.presetWithOffset} ${this.elevationOffset > 0 ? '+' : ''}${this.elevationOffset} mils)`;
        }
        this.showMessage(message, 'success');
    }

    loadTargetPreset(presetNumber) {
        const preset = this.targetPresets[presetNumber];

        if (!preset) {
            this.showMessage(`เป้าหมาย ${presetNumber} ยังไม่มีข้อมูล`, 'warning');
            return;
        }

        // Load values into input fields
        this.targetX.value = preset.x;
        this.targetY.value = preset.y;
        this.targetAlt.value = preset.alt;

        // Load elevation offset if available (backward compatibility)
        this.elevationOffset = preset.elevationOffset || 0;
        this.updateOffsetDisplay();

        // เป้าหมายใหม่จากพรีเซ็ตอาจอยู่คนละระยะ — ล้างการล็อกประจุเพื่อให้เลือกใหม่อัตโนมัติ
        this.manualRingSelected = false;

        // Update grid reference display
        this.updateGridReferences();

        // Update active preset status
        this.updateActivePresetStatus();

        // Update numpad highlight
        this.updateNumpadHighlight();

        // Trigger calculation if inputs are valid
        if (this.validateInputs()) {
            this.calculate();
        }

        // Show success message with offset info
        const texts = LANGUAGE_DATA[currentLanguage];
        let message = texts.presetLoadedMessage.replace('{0}', presetNumber);
        if (this.elevationOffset !== 0) {
            message += ` (${texts.presetLoadedWithOffset} ${this.elevationOffset > 0 ? '+' : ''}${this.elevationOffset} mils)`;
        }
        this.showMessage(message, 'success');
    }

    loadTargetPresets() {
        // Load presets from localStorage
        try {
            const saved = localStorage.getItem('mortarTargetPresets');
            if (saved) {
                this.targetPresets = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Failed to load target presets:', e);
            this.targetPresets = {};
        }

        // Update all button statuses (exclude clear button)
        for (let i = 1; i <= 9; i++) {
            this.updatePresetButtonStatus(i);
        }
    }

    updatePresetButtonStatus(presetNumber) {
        const button = document.querySelector(`.preset-btn[data-preset="${presetNumber}"]`);
        if (!button) return;

        const statusSpan = button.querySelector('.preset-status');
        const preset = this.targetPresets[presetNumber];

        if (preset) {
            button.classList.add('has-data');
            const date = new Date(preset.timestamp);
            const timeStr = date.toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit'
            });
            statusSpan.textContent = currentLanguage === 'th' ? 'มีข้อมูล' : 'Saved';

            // Create tooltip with elevation offset info
            const offsetInfo = preset.elevationOffset ?
                ` | Offset: ${preset.elevationOffset > 0 ? '+' : ''}${preset.elevationOffset} mils` : '';
            button.title = `Grid: ${preset.x}, ${preset.y} Alt: ${preset.alt}m${offsetInfo} (${timeStr})`;
        } else {
            button.classList.remove('has-data');
            statusSpan.textContent = LANGUAGE_DATA[currentLanguage].presetEmpty;
            button.title = currentLanguage === 'th' ?
                'คลิกซ้าย: โหลด • คลิกขวา: บันทึก' :
                'Left-click: Load • Right-click: Save';
        }
    }

    clearTargetData() {
        // Clear all target input fields
        this.targetX.value = '';
        this.targetY.value = '';
        this.targetAlt.value = '';

        // Update grid reference display
        this.updateGridReferences();

        // Hide results section
        this.resultsSection.classList.remove('show');

        // Clear validation states
        [this.targetX, this.targetY, this.targetAlt].forEach(input => {
            input.classList.remove('error', 'success');
        });

        // Clear all saved target presets (1-9)
        this.targetPresets = {};
        localStorage.removeItem('mortarTargetPresets');

        // Update all preset button statuses to show "Empty"
        for (let i = 1; i <= 9; i++) {
            this.updatePresetButtonStatus(i);
        }

        // Update active preset status (will remove all highlights)
        this.updateActivePresetStatus();

        // Show success message
        this.showMessage(LANGUAGE_DATA[currentLanguage].clearTargetMessage, 'success');
    }

    updateActivePresetStatus() {
        // Get current target values
        const currentX = this.targetX.value;
        const currentY = this.targetY.value;
        const currentAlt = this.targetAlt.value;

        // Remove active-preset class from all buttons first
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active-preset');
        });

        // If any field is empty, don't highlight any preset
        if (!currentX || !currentY || !currentAlt) {
            return;
        }

        // Check each preset for matching values (including elevation offset)
        for (let i = 1; i <= 9; i++) {
            const preset = this.targetPresets[i];
            const presetOffset = preset ? (preset.elevationOffset || 0) : 0;

            if (preset &&
                preset.x === currentX &&
                preset.y === currentY &&
                preset.alt === currentAlt &&
                presetOffset === this.elevationOffset) {

                // Found matching preset - highlight it
                const button = document.querySelector(`.preset-btn[data-preset="${i}"]`);
                if (button) {
                    button.classList.add('active-preset');
                }
                break; // Only highlight the first match
            }
        }
    }

    showCoordinateError() {
        const texts = LANGUAGE_DATA[currentLanguage];
        const message = texts.coordinateErrorMessage || "⚠️ Please enter Grid X and Grid Y coordinates with 5 digits (e.g., 10000-99999)";
        this.showMessage(message, 'warning');
    }

    // Apply Elevation Offset to current calculation
    applyElevationOffset(offsetValue) {
        const texts = LANGUAGE_DATA[currentLanguage];

        if (offsetValue === 'clear') {
            // Clear offset
            this.elevationOffset = 0;
            this.updateOffsetDisplay();

            // Recalculate if inputs are valid
            if (this.validateInputs()) {
                this.calculate();
            }

            this.showMessage(texts.offsetCleared, 'success');
        } else {
            // Apply offset
            const offsetNum = parseInt(offsetValue);
            this.elevationOffset += offsetNum;
            this.updateOffsetDisplay();

            // Recalculate if inputs are valid
            if (this.validateInputs()) {
                this.calculate();
            }

            this.showMessage(`${texts.offsetApplied} ${offsetValue} mils`, 'success');
        }
    }

    // Update offset display
    updateOffsetDisplay() {
        if (this.currentOffsetValue) {
            this.currentOffsetValue.textContent = this.elevationOffset > 0 ?
                `+${this.elevationOffset}` :
                this.elevationOffset.toString();
        }

        // Update offset button states
        this.updateOffsetButtonStates();
    }

    // Update offset button visual states
    updateOffsetButtonStates() {
        this.offsetButtons.forEach(btn => {
            btn.classList.remove('offset-active');
        });

        // Highlight clear button if offset is non-zero
        if (this.elevationOffset !== 0) {
            const clearBtn = document.querySelector('.offset-btn[data-offset="clear"]');
            if (clearBtn) {
                clearBtn.classList.add('offset-active');
            }
        }
    }

    showMessage(message, type = 'info') {
        // Create a simple toast message
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        // Style the toast
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: 'bold',
            zIndex: '10000',
            maxWidth: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            opacity: '0',
            transform: 'translateY(-20px)',
            transition: 'all 0.3s ease'
        });

        // Set background color based on type
        switch (type) {
            case 'success':
                toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                break;
            case 'warning':
                toast.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                break;
            case 'error':
                toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                break;
            default:
                toast.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
        }

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Update the mortar type badge in results section
    updateMortarTypeBadge() {
        const typeLabel = { mod: 'MOD', m777: 'M777' }[this.currentMortarType] || 'ORIGINAL';

        if (this.mortarTypeBadge) {
            this.mortarTypeBadge.textContent = typeLabel;
            // Add different colors for different types if desired
            if (this.currentMortarType === 'mod') {
                this.mortarTypeBadge.style.background = 'linear-gradient(135deg, #a855f7, #c084fc)';
                this.mortarTypeBadge.style.boxShadow = '0 0 10px rgba(168, 85, 247, 0.4)';
            } else {
                this.mortarTypeBadge.style.background = 'linear-gradient(135deg, #1f6feb, #58a6ff)';
                this.mortarTypeBadge.style.boxShadow = '0 0 10px rgba(88, 166, 255, 0.4)';
            }
        }

        if (this.fixedMortarTypeBadge) {
            this.fixedMortarTypeBadge.textContent = typeLabel;
            if (this.currentMortarType === 'mod') {
                this.fixedMortarTypeBadge.style.background = 'linear-gradient(135deg, #a855f7, #c084fc)';
            } else {
                this.fixedMortarTypeBadge.style.background = 'linear-gradient(135deg, #1f6feb, #58a6ff)';
            }
        }
    }
}

// Visitor Counter Functions
function initializeVisitorCounter() {
    const today = new Date().toDateString();

    // Get or initialize total visits
    let totalVisits = parseInt(localStorage.getItem('totalVisits') || '0');

    // Get or initialize today's visits
    let todayVisits = 0;
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (lastVisitDate === today) {
        todayVisits = parseInt(localStorage.getItem('todayVisits') || '0');
    } else {
        // New day, reset today's counter
        localStorage.setItem('lastVisitDate', today);
        localStorage.setItem('todayVisits', '0');
    }

    // Check if this is a new session (not a page refresh)
    const sessionVisited = sessionStorage.getItem('sessionVisited');
    if (!sessionVisited) {
        // New session - increment counters
        totalVisits++;
        todayVisits++;

        // Save to storage
        localStorage.setItem('totalVisits', totalVisits.toString());
        localStorage.setItem('todayVisits', todayVisits.toString());
        sessionStorage.setItem('sessionVisited', 'true');
    }

    // Update display
    updateVisitorDisplay(totalVisits, todayVisits);
}

function updateVisitorDisplay(total, today) {
    const totalElement = document.getElementById('total-visits');
    const todayElement = document.getElementById('today-visits');
    const onlineElement = document.getElementById('online-now');

    if (totalElement) totalElement.textContent = total.toLocaleString();
    if (todayElement) todayElement.textContent = today.toLocaleString();
    if (onlineElement) onlineElement.textContent = '1'; // Always show 1 for current user
}

// Initialize the calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system first
    initializeLanguage();

    // Initialize visitor counter
    initializeVisitorCounter();

    // Then initialize the calculator and store reference
    window.mortarCalculator = new MortarCalculator();
});

/*
 * =======================================================================
 * ไม่อนุญาตให้นำไปใช้เพื่อแสวงหาผลกำไรใดๆทั้งสิ้น
 * หากนำไปใช้งานในส่วนอื่น ใส่เครดิต Youtube : Sitt Chanel ให้ด้วย
 * 
 * Not allowed to be used for any commercial purposes.
 * If used in other projects, please credit Youtube : Sitt Chanel
 * =======================================================================
 */
