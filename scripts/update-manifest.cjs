const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');const html=fs.readFileSync(path.join(root,'index.html'));const source=html.toString('utf8');
const version=source.match(/const APP_VERSION = '([0-9.]+)'/)[1];
const manifest={version,url:'https://firestrykerfx.github.io/index.html',sha256:crypto.createHash('sha256').update(html).digest('hex'),changelog:['Copy counts sync automatically using the higher local or cloud value.','Usage-only differences no longer require comparison or confirmation.']};
const file=path.join(root,'version.json');
if(process.argv.includes('--check')){const current=JSON.parse(fs.readFileSync(file,'utf8'));if(current.version!==manifest.version||current.sha256!==manifest.sha256||current.url!==manifest.url){console.error('Manifest is stale; run npm run manifest.');process.exit(1);}console.log('Manifest version, URL and SHA-256 match index.html.');}
else{fs.writeFileSync(file,JSON.stringify(manifest,null,2)+'\n');console.log('Updated local version.json for '+version);}
