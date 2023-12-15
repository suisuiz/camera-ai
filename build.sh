rm TS*.zip
rm -rf ui
d=`date +"%Y%m%d"`
npm run build:smoke
mv dist ui
zip -r TSSmokeFireMonitoring$d.zip assets main.json server ui
rm -rf ui
npm run build:object
mv dist ui
zip -r TSObject80Detection$d.zip assets main.json server ui
rm -rf ui
npm run build:people
mv dist ui
zip -r TSPeopleFallDetection$d.zip assets main.json server ui
rm -rf ui
npm run build:intrusion
mv dist ui
zip -r TSIntrusionMonitoring$d.zip assets main.json server ui
rm -rf ui