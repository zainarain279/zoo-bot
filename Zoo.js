const _0x5931e3=_0x6134;(function(_0x2dcfec,_0x2e043b){const _0x27d9f8=_0x6134,_0x502a61=_0x2dcfec();while(!![]){try{const _0x3b4234=parseInt(_0x27d9f8(0x1a3))/0x1*(parseInt(_0x27d9f8(0x1ef))/0x2)+-parseInt(_0x27d9f8(0x1ad))/0x3*(-parseInt(_0x27d9f8(0x21d))/0x4)+parseInt(_0x27d9f8(0x218))/0x5*(parseInt(_0x27d9f8(0x215))/0x6)+parseInt(_0x27d9f8(0x1ae))/0x7+-parseInt(_0x27d9f8(0x217))/0x8*(-parseInt(_0x27d9f8(0x222))/0x9)+parseInt(_0x27d9f8(0x1b2))/0xa+-parseInt(_0x27d9f8(0x1c9))/0xb;if(_0x3b4234===_0x2e043b)break;else _0x502a61['push'](_0x502a61['shift']());}catch(_0x1bd37c){_0x502a61['push'](_0x502a61['shift']());}}}(_0x2416,0x6e680));const fs=require('fs'),path=require(_0x5931e3(0x1f9)),axios=require(_0x5931e3(0x211)),colors=require('colors'),readline=require('readline'),crypto=require(_0x5931e3(0x1cf)),{DateTime}=require(_0x5931e3(0x1b7)),{HttpsProxyAgent}=require(_0x5931e3(0x1e8));class ZooAPIClient{constructor(){const _0x4f753a=_0x5931e3;this[_0x4f753a(0x21c)]={'Accept':_0x4f753a(0x1a2),'Accept-Encoding':_0x4f753a(0x1d7),'Accept-Language':'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5','Content-Type':'application/json','Origin':_0x4f753a(0x1ec),'Referer':_0x4f753a(0x20d),'Sec-Ch-Ua':_0x4f753a(0x1fd),'Sec-Ch-Ua-Mobile':'?0','Sec-Ch-Ua-Platform':_0x4f753a(0x206),'Sec-Fetch-Dest':_0x4f753a(0x22a),'Sec-Fetch-Mode':_0x4f753a(0x1ac),'Sec-Fetch-Site':_0x4f753a(0x19d),'User-Agent':_0x4f753a(0x1a4),'Is-Beta-Server':_0x4f753a(0x1be)},this[_0x4f753a(0x212)]=null,this[_0x4f753a(0x1a5)]=[],this[_0x4f753a(0x1f1)]();}[_0x5931e3(0x1f1)](){const _0x23a8ce=_0x5931e3;try{const _0x144946=path[_0x23a8ce(0x214)](__dirname,_0x23a8ce(0x200));fs[_0x23a8ce(0x19c)](_0x144946)&&(this[_0x23a8ce(0x1a5)]=fs[_0x23a8ce(0x20c)](_0x144946,'utf8')['replace'](/\r/g,'')[_0x23a8ce(0x221)]('\x0a')['filter'](Boolean));}catch(_0x24512d){this[_0x23a8ce(0x1e6)]('Error\x20loading\x20proxies:\x20'+_0x24512d['message'],'error');}}async[_0x5931e3(0x1f2)](_0x59a629){const _0x3cf28c=_0x5931e3;try{const _0x472bfb=new HttpsProxyAgent(_0x59a629),_0x4f35d6=await axios[_0x3cf28c(0x1b8)]('https://api.ipify.org?format=json',{'httpsAgent':_0x472bfb,'timeout':0x2710});if(_0x4f35d6[_0x3cf28c(0x1d1)]===0xc8)return _0x4f35d6[_0x3cf28c(0x1ce)]['ip'];else throw new Error(_0x3cf28c(0x1e0)+_0x4f35d6[_0x3cf28c(0x1d1)]);}catch(_0x42d419){throw new Error(_0x3cf28c(0x1d9)+_0x42d419[_0x3cf28c(0x1a0)]);}}['getAxiosConfig'](_0x3a1165){const _0x129ad7=_0x5931e3;if(this[_0x129ad7(0x1a5)][_0x129ad7(0x19f)]>0x0&&_0x3a1165<this['proxyList']['length'])return{'httpsAgent':new HttpsProxyAgent(this[_0x129ad7(0x1a5)][_0x3a1165]),'timeout':0x7530};return{'timeout':0x7530};}async['createApiHash'](_0x4fd1d6,_0x4222a1){const _0x486ea7=_0x5931e3,_0x29514a=_0x4fd1d6+'_'+_0x4222a1,_0x31daa4=encodeURIComponent(_0x29514a);return crypto[_0x486ea7(0x1c5)]('md5')[_0x486ea7(0x19b)](_0x31daa4)[_0x486ea7(0x1c2)]('hex');}async[_0x5931e3(0x219)](_0x4e3e72,_0x3cc4a1){const _0x1d84f3=_0x5931e3;if(!_0x4e3e72)return{'success':![],'error':_0x1d84f3(0x203)};try{const _0x1bd7cb=_0x4e3e72[_0x1d84f3(0x221)](_0x1d84f3(0x1dd))[0x1]?.[_0x1d84f3(0x221)]('&')[0x0];if(!_0x1bd7cb)throw new Error('Could\x20not\x20extract\x20hash\x20from\x20initData');const _0x5292f2=Math[_0x1d84f3(0x20a)](Date[_0x1d84f3(0x1b9)]()/0x3e8),_0x5c90bc=JSON[_0x1d84f3(0x21a)](decodeURIComponent(_0x4e3e72[_0x1d84f3(0x221)](_0x1d84f3(0x1bc))[0x1][_0x1d84f3(0x221)]('&')[0x0])),_0x1f56e2=_0x4e3e72[_0x1d84f3(0x221)]('start_param=')[0x1]?.[_0x1d84f3(0x221)]('&')[0x0]||'',_0x10b10e=_0x4e3e72[_0x1d84f3(0x221)](_0x1d84f3(0x1c3))[0x1]?.[_0x1d84f3(0x221)]('&')[0x0]||'',_0x272bf1={'data':{'initData':_0x4e3e72,'startParam':_0x1f56e2,'photoUrl':_0x5c90bc[_0x1d84f3(0x1ea)]||'','platform':_0x1d84f3(0x208),'chatId':'','chatType':_0x1d84f3(0x1e3),'chatInstance':_0x10b10e}},_0x14fb56=await this[_0x1d84f3(0x1d0)](_0x5292f2,JSON[_0x1d84f3(0x1ca)](_0x272bf1)),_0x23b4db={...this['headers'],'api-hash':_0x14fb56,'Api-Key':_0x1bd7cb,'Api-Time':_0x5292f2},_0x203be2=await axios[_0x1d84f3(0x1a9)]('https://api.zoo.team/telegram/auth',_0x272bf1,{'headers':_0x23b4db,...this[_0x1d84f3(0x1f0)](_0x3cc4a1)});return _0x203be2[_0x1d84f3(0x1d1)]===0xc8&&_0x203be2['data']['success']?{'success':!![],'data':_0x203be2[_0x1d84f3(0x1ce)]['data']}:{'success':![],'error':_0x203be2[_0x1d84f3(0x1ce)][_0x1d84f3(0x1a0)]};}catch(_0x11dbf2){return{'success':![],'error':_0x11dbf2['message']};}}async['finishOnboarding'](_0x1a5f57,_0x1aba17){const _0x503a67=_0x5931e3;try{const _0x4ee96c=_0x1a5f57[_0x503a67(0x221)](_0x503a67(0x1dd))[0x1]?.[_0x503a67(0x221)]('&')[0x0];if(!_0x4ee96c)throw new Error('Could\x20not\x20extract\x20hash\x20from\x20initData');const _0xa20e2f=Math[_0x503a67(0x20a)](Date['now']()/0x3e8),_0x24cf4b={'data':0x1},_0x227c69=await this[_0x503a67(0x1d0)](_0xa20e2f,JSON[_0x503a67(0x1ca)](_0x24cf4b)),_0x50c4f9={...this[_0x503a67(0x21c)],'api-hash':_0x227c69,'Api-Key':_0x4ee96c,'Api-Time':_0xa20e2f},_0xe32d6e=await axios['post'](_0x503a67(0x1fe),_0x24cf4b,{'headers':_0x50c4f9,...this[_0x503a67(0x1f0)](_0x1aba17)});return _0xe32d6e[_0x503a67(0x1d1)]===0xc8&&_0xe32d6e['data'][_0x503a67(0x199)]?{'success':!![],'data':_0xe32d6e[_0x503a67(0x1ce)]['data']}:{'success':![],'error':_0xe32d6e[_0x503a67(0x1ce)]['message']};}catch(_0x2018d7){return{'success':![],'error':_0x2018d7[_0x503a67(0x1a0)]};}}async[_0x5931e3(0x1e1)](_0x4c5cc2,_0x1a5841){const _0x48c63e=_0x5931e3;if(!_0x4c5cc2)return{'success':![],'error':'initData\x20is\x20required'};try{const _0x3ed23c=_0x4c5cc2[_0x48c63e(0x221)](_0x48c63e(0x1dd))[0x1]?.[_0x48c63e(0x221)]('&')[0x0];if(!_0x3ed23c)throw new Error(_0x48c63e(0x21b));const _0xe568b4=Math[_0x48c63e(0x20a)](Date['now']()/0x3e8),_0x3e295a=JSON[_0x48c63e(0x1ca)]({'data':{}}),_0x387ffc=await this[_0x48c63e(0x1d0)](_0xe568b4,_0x3e295a),_0x55519d={...this['headers'],'api-hash':_0x387ffc,'Api-Key':_0x3ed23c,'Api-Time':_0xe568b4},_0x9a330a=await axios[_0x48c63e(0x1a9)](_0x48c63e(0x20b),{'data':{}},{'headers':_0x55519d,...this['getAxiosConfig'](_0x1a5841)});return _0x9a330a[_0x48c63e(0x1d1)]===0xc8&&_0x9a330a[_0x48c63e(0x1ce)][_0x48c63e(0x199)]?(this[_0x48c63e(0x212)]=_0x9a330a[_0x48c63e(0x1ce)][_0x48c63e(0x1ce)],{'success':!![],'data':_0x9a330a['data'][_0x48c63e(0x1ce)]}):{'success':![],'error':_0x9a330a[_0x48c63e(0x1ce)][_0x48c63e(0x1a0)]};}catch(_0x4c8a93){return{'success':![],'error':_0x4c8a93[_0x48c63e(0x1a0)]};}}async['getUserDataAfter'](_0x305097,_0x7b19e6){const _0x4c3c11=_0x5931e3;try{const _0x59e6c8=_0x305097[_0x4c3c11(0x221)](_0x4c3c11(0x1dd))[0x1]?.['split']('&')[0x0];if(!_0x59e6c8)throw new Error(_0x4c3c11(0x21b));const _0x950d34=Math[_0x4c3c11(0x20a)](Date[_0x4c3c11(0x1b9)]()/0x3e8),_0xc97408=JSON['stringify']({'data':{}}),_0x1f0fbf=await this[_0x4c3c11(0x1d0)](_0x950d34,_0xc97408),_0xa9712e={...this[_0x4c3c11(0x21c)],'api-hash':_0x1f0fbf,'Api-Key':_0x59e6c8,'Api-Time':_0x950d34},_0x5cbe83=await axios['post'](_0x4c3c11(0x1b3),{'data':{}},{'headers':_0xa9712e,...this[_0x4c3c11(0x1f0)](_0x7b19e6)});return _0x5cbe83['status']===0xc8&&_0x5cbe83['data'][_0x4c3c11(0x199)]?{'success':!![],'data':_0x5cbe83['data'][_0x4c3c11(0x1ce)]}:{'success':![],'error':_0x5cbe83[_0x4c3c11(0x1ce)][_0x4c3c11(0x1a0)]};}catch(_0x4f10cb){return{'success':![],'error':_0x4f10cb['message']};}}async['claimDailyReward'](_0x57fec7,_0x48ad4a,_0x5d00fa){const _0xd7a469=_0x5931e3;try{const _0x4d3266=_0x57fec7['split'](_0xd7a469(0x1dd))[0x1]?.[_0xd7a469(0x221)]('&')[0x0];if(!_0x4d3266)throw new Error(_0xd7a469(0x21b));const _0xa6f5dc=Math[_0xd7a469(0x20a)](Date[_0xd7a469(0x1b9)]()/0x3e8),_0x53ee3c={'data':_0x48ad4a},_0x334e14=await this[_0xd7a469(0x1d0)](_0xa6f5dc,JSON[_0xd7a469(0x1ca)](_0x53ee3c)),_0x194a5b={...this['headers'],'api-hash':_0x334e14,'Api-Key':_0x4d3266,'Api-Time':_0xa6f5dc},_0x1bd2ee=await axios[_0xd7a469(0x1a9)](_0xd7a469(0x216),_0x53ee3c,{'headers':_0x194a5b,...this['getAxiosConfig'](_0x5d00fa)});return _0x1bd2ee['status']===0xc8&&_0x1bd2ee[_0xd7a469(0x1ce)][_0xd7a469(0x199)]?{'success':!![],'data':_0x1bd2ee[_0xd7a469(0x1ce)][_0xd7a469(0x1ce)]}:{'success':![],'error':_0x1bd2ee[_0xd7a469(0x1ce)][_0xd7a469(0x1a0)]};}catch(_0x43ec71){return{'success':![],'error':_0x43ec71[_0xd7a469(0x1a0)]};}}async['handleAutoFeed'](_0x2660eb,_0x21c3b6){const _0x12a40c=_0x5931e3;try{const _0x2382ed=_0x2660eb[_0x12a40c(0x221)](_0x12a40c(0x1dd))[0x1]?.['split']('&')[0x0];if(!_0x2382ed)throw new Error(_0x12a40c(0x21b));const _0x5b06d5=await this[_0x12a40c(0x1e1)](_0x2660eb,_0x21c3b6);if(!_0x5b06d5[_0x12a40c(0x199)])throw new Error(_0x12a40c(0x1de)+_0x5b06d5[_0x12a40c(0x210)]);const {hero:_0x200cea,feed:_0x449ece}=_0x5b06d5[_0x12a40c(0x1ce)];if(_0x449ece[_0x12a40c(0x1d2)]){if(!_0x200cea[_0x12a40c(0x1b0)]['includes']('20')){const _0x28328d=Math[_0x12a40c(0x20a)](Date[_0x12a40c(0x1b9)]()/0x3e8),_0x1d6c32={'data':0x14},_0x12eb7d=await this['createApiHash'](_0x28328d,JSON['stringify'](_0x1d6c32)),_0x1cb761={...this[_0x12a40c(0x21c)],'api-hash':_0x12eb7d,'Api-Key':_0x2382ed,'Api-Time':_0x28328d},_0x14fbb2=await axios['post'](_0x12a40c(0x1fe),_0x1d6c32,{'headers':_0x1cb761,...this[_0x12a40c(0x1f0)](_0x21c3b6)});if(!_0x14fbb2[_0x12a40c(0x1ce)][_0x12a40c(0x199)])throw new Error(_0x12a40c(0x227));}const _0xdfd3d0=Math[_0x12a40c(0x20a)](Date[_0x12a40c(0x1b9)]()/0x3e8),_0x4e4123={'data':'instant'},_0x5306a7=await this['createApiHash'](_0xdfd3d0,JSON[_0x12a40c(0x1ca)](_0x4e4123)),_0x3d5c71={...this['headers'],'api-hash':_0x5306a7,'Api-Key':_0x2382ed,'Api-Time':_0xdfd3d0},_0x374937=await axios['post'](_0x12a40c(0x1d6),_0x4e4123,{'headers':_0x3d5c71,...this['getAxiosConfig'](_0x21c3b6)});if(_0x374937[_0x12a40c(0x1ce)][_0x12a40c(0x199)])return this[_0x12a40c(0x1e6)](_0x12a40c(0x1f3),_0x12a40c(0x199)),{'success':!![],'data':_0x374937[_0x12a40c(0x1ce)]};}return{'success':!![]};}catch(_0x1235c8){return{'success':![],'error':_0x1235c8['message']};}}async[_0x5931e3(0x197)](_0x54f4a6,_0x33ef75){const _0x23df92=_0x5931e3;try{const _0x5cece2=_0x54f4a6['split']('hash=')[0x1]?.['split']('&')[0x0];if(!_0x5cece2)throw new Error(_0x23df92(0x21b));const _0x3f6aa1=await this[_0x23df92(0x1e1)](_0x54f4a6,_0x33ef75);if(!_0x3f6aa1[_0x23df92(0x199)])throw new Error(_0x23df92(0x1de)+_0x3f6aa1[_0x23df92(0x210)]);const {animals:_0x3fdcfb,hero:_0x4ac996,dbData:_0x214ae2}=_0x3f6aa1[_0x23df92(0x1ce)],_0x4b70e1=new Set(_0x3fdcfb[_0x23df92(0x225)](_0x5641f6=>_0x5641f6[_0x23df92(0x1c6)])),_0x3fc209=new Set(_0x3fdcfb['map'](_0x4e4cda=>_0x4e4cda[_0x23df92(0x220)]));for(const _0x130081 of _0x214ae2[_0x23df92(0x1af)]){if(!_0x4b70e1[_0x23df92(0x201)](_0x130081['key'])){const _0x2dd43c=_0x130081[_0x23df92(0x21e)][0x0][_0x23df92(0x223)];if(_0x4ac996[_0x23df92(0x228)]>=_0x2dd43c){let _0x274e38=0x1;while(_0x3fc209[_0x23df92(0x201)](_0x274e38)){_0x274e38++;}const _0x26d188=Math[_0x23df92(0x20a)](Date['now']()/0x3e8),_0x4c8ae9={'data':{'position':_0x274e38,'animalKey':_0x130081['key']}},_0x24e4b1=await this[_0x23df92(0x1d0)](_0x26d188,JSON[_0x23df92(0x1ca)](_0x4c8ae9)),_0x5d9fd6={...this[_0x23df92(0x21c)],'api-hash':_0x24e4b1,'Api-Key':_0x5cece2,'Api-Time':_0x26d188},_0xdaacd4=await axios['post']('https://api.zoo.team/animal/buy',_0x4c8ae9,{'headers':_0x5d9fd6,...this[_0x23df92(0x1f0)](_0x33ef75)});_0xdaacd4[_0x23df92(0x1d1)]===0xc8&&_0xdaacd4[_0x23df92(0x1ce)][_0x23df92(0x199)]&&(this[_0x23df92(0x1e6)](_0x23df92(0x194)+_0x130081['title'],_0x23df92(0x199)),_0x3fc209['add'](_0x274e38),_0x4b70e1[_0x23df92(0x198)](_0x130081[_0x23df92(0x1c6)]));}}}for(const _0x2f20b6 of _0x3fdcfb){const _0x25c87a=_0x214ae2[_0x23df92(0x1af)][_0x23df92(0x1a1)](_0x375bfb=>_0x375bfb[_0x23df92(0x1c6)]===_0x2f20b6[_0x23df92(0x1c6)]);if(_0x25c87a){const _0x39cb45=_0x2f20b6['level']+0x1,_0x3adc81=_0x25c87a[_0x23df92(0x21e)][_0x23df92(0x1a1)](_0x11f2a3=>_0x11f2a3[_0x23df92(0x1d5)]===_0x39cb45);if(_0x3adc81&&_0x4ac996[_0x23df92(0x228)]>=_0x3adc81['price']){const _0x28e278=Math['floor'](Date[_0x23df92(0x1b9)]()/0x3e8),_0x52f49d={'data':{'position':_0x2f20b6[_0x23df92(0x220)],'animalKey':_0x2f20b6[_0x23df92(0x1c6)]}},_0x565a67=await this[_0x23df92(0x1d0)](_0x28e278,JSON[_0x23df92(0x1ca)](_0x52f49d)),_0x2da175={...this['headers'],'api-hash':_0x565a67,'Api-Key':_0x5cece2,'Api-Time':_0x28e278};try{const _0x5dd39f=await axios[_0x23df92(0x1a9)](_0x23df92(0x1ee),_0x52f49d,{'headers':_0x2da175,...this[_0x23df92(0x1f0)](_0x33ef75)});_0x5dd39f[_0x23df92(0x1d1)]===0xc8&&_0x5dd39f[_0x23df92(0x1ce)][_0x23df92(0x199)]&&this['log'](_0x23df92(0x205)+_0x25c87a[_0x23df92(0x19e)]+_0x23df92(0x213)+_0x39cb45,_0x23df92(0x199));}catch(_0x5593a0){_0x5593a0[_0x23df92(0x1e9)]?.[_0x23df92(0x1d1)]===0x1f4&&this[_0x23df92(0x1e6)](_0x23df92(0x1aa)+_0x25c87a[_0x23df92(0x19e)]+':\x20'+_0x5593a0[_0x23df92(0x1a0)],_0x23df92(0x210));}}}}return{'success':!![]};}catch(_0x399566){return{'success':![],'error':_0x399566[_0x23df92(0x1a0)]};}}[_0x5931e3(0x1e6)](_0x585228,_0x530fb0='info'){const _0x4f7425=_0x5931e3,_0x2a799e=new Date()[_0x4f7425(0x1db)]();switch(_0x530fb0){case'success':console[_0x4f7425(0x1e6)](('['+_0x2a799e+_0x4f7425(0x20e)+_0x585228)[_0x4f7425(0x1d8)]);break;case _0x4f7425(0x195):console[_0x4f7425(0x1e6)](('['+_0x2a799e+']\x20[*]\x20'+_0x585228)[_0x4f7425(0x1a8)]);break;case _0x4f7425(0x210):console['log'](('['+_0x2a799e+']\x20[✗]\x20'+_0x585228)['red']);break;case'warning':console['log'](('['+_0x2a799e+_0x4f7425(0x1cd)+_0x585228)[_0x4f7425(0x1ab)]);break;default:console[_0x4f7425(0x1e6)](('['+_0x2a799e+_0x4f7425(0x1df)+_0x585228)['blue']);}}['calculateWaitTimeInSeconds'](_0x248d77){const _0x232716=_0x5931e3,_0x43a32f=DateTime[_0x232716(0x1eb)](),_0x4a82de=DateTime[_0x232716(0x22b)](_0x248d77,_0x232716(0x1e5),{'zone':'UTC'})[_0x232716(0x1fc)](_0x232716(0x1eb)),_0x1d4a7b=Math['max'](0x0,Math[_0x232716(0x20a)](_0x4a82de['diff'](_0x43a32f,_0x232716(0x1f6))[_0x232716(0x1f6)]));return _0x1d4a7b;}async[_0x5931e3(0x20f)](_0x5f2b0c){const _0x5aa4a4=_0x5931e3,_0x5c3ec0=DateTime[_0x5aa4a4(0x1eb)]()['plus']({'seconds':_0x5f2b0c});for(let _0x5a16e9=_0x5f2b0c;_0x5a16e9>0x0;_0x5a16e9--){const _0x2f6155=DateTime[_0x5aa4a4(0x1eb)]()[_0x5aa4a4(0x1f5)](DateTime[_0x5aa4a4(0x1a6)]),_0x464e39=_0x5c3ec0['diff'](DateTime['local']()),_0x3006e2=Math[_0x5aa4a4(0x20a)](_0x464e39['as'](_0x5aa4a4(0x1bf))),_0x183170=Math[_0x5aa4a4(0x20a)](_0x464e39['as']('seconds'))%0x3c;readline[_0x5aa4a4(0x1cc)](process[_0x5aa4a4(0x1b5)],0x0),process[_0x5aa4a4(0x1b5)][_0x5aa4a4(0x1a7)]('['+_0x2f6155+_0x5aa4a4(0x1c7)+_0x3006e2+'\x20minute\x20'+_0x183170+'\x20seconds\x20to\x20continue...'),await new Promise(_0x568228=>setTimeout(_0x568228,0x3e8));}readline[_0x5aa4a4(0x1cc)](process[_0x5aa4a4(0x1b5)],0x0),readline[_0x5aa4a4(0x1f7)](process[_0x5aa4a4(0x1b5)],0x0);}async['main'](){const _0x258ed2=_0x5931e3;console[_0x258ed2(0x1e6)]('\x0a\x1b[33m░▀▀█░█▀█░▀█▀░█▀█\x0a░▄▀░░█▀█░░█░░█░█\x0a░▀▀▀░▀░▀░▀▀▀░▀░▀\x0a╔══════════════════════════════════╗\x0a║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20ZAIN\x20ARAIN\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20AUTO\x20SCRIPT\x20MASTER\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20JOIN\x20TELEGRAM\x20CHANNEL\x20NOW!\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20https://t.me/AirdropScript6\x20\x20\x20\x20\x20║\x0a║\x20\x20@AirdropScript6\x20-\x20OFFICIAL\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20CHANNEL\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20FAST\x20-\x20RELIABLE\x20-\x20SECURE\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20SCRIPTS\x20EXPERT\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a╚══════════════════════════════════╝\x0a\x1b[0m\x0a\x20\x20\x20\x20\x20\x20\x20\x20'),console[_0x258ed2(0x1e6)](colors[_0x258ed2(0x1ab)](_0x258ed2(0x1c4)));try{const _0x13c940=path[_0x258ed2(0x214)](__dirname,'data.txt');if(!fs['existsSync'](_0x13c940)){this[_0x258ed2(0x1e6)](_0x258ed2(0x1da),'error');return;}const _0x23f117=fs['readFileSync'](_0x13c940,_0x258ed2(0x1c8))[_0x258ed2(0x21f)](/\r/g,'')[_0x258ed2(0x221)]('\x0a')['filter'](Boolean);if(_0x23f117[_0x258ed2(0x19f)]===0x0){this[_0x258ed2(0x1e6)](_0x258ed2(0x1ff),'error');return;}let _0x46c1f2=0x5a0*0x3c;while(!![]){let _0x87870c=null;for(let _0x1a679a=0x0;_0x1a679a<_0x23f117[_0x258ed2(0x19f)];_0x1a679a++){const _0x548cf4=_0x23f117[_0x1a679a];try{const _0x26c1aa=JSON[_0x258ed2(0x21a)](decodeURIComponent(_0x548cf4['split'](_0x258ed2(0x1bc))[0x1][_0x258ed2(0x221)]('&')[0x0])),_0x3ae4ad=_0x26c1aa['username']||'Unknown';let _0x1f9270=_0x258ed2(0x1b1);if(this['proxyList'][_0x1a679a])try{_0x1f9270=await this[_0x258ed2(0x1f2)](this[_0x258ed2(0x1a5)][_0x1a679a]);}catch(_0x46819f){this[_0x258ed2(0x1e6)](_0x258ed2(0x1cb)+_0x46819f[_0x258ed2(0x1a0)],_0x258ed2(0x1ed));}console['log'](_0x258ed2(0x1d3)+(_0x1a679a+0x1)+_0x258ed2(0x1b6)+_0x3ae4ad[_0x258ed2(0x1d8)]+'\x20|\x20ip:\x20'+_0x1f9270+_0x258ed2(0x196)),this[_0x258ed2(0x1e6)]('Logging\x20in...','info');const _0x5a448a=await this['login'](_0x548cf4,_0x1a679a);if(_0x5a448a[_0x258ed2(0x199)]){this['log'](_0x258ed2(0x1e7),_0x258ed2(0x199));const _0x4ad453=await this[_0x258ed2(0x1e1)](_0x548cf4,_0x1a679a);if(_0x4ad453[_0x258ed2(0x199)]){const {hero:_0x34ff5b,feed:_0xf02b2e}=_0x4ad453['data'];if(_0x1a679a===0x0&&!_0xf02b2e[_0x258ed2(0x1d2)]&&_0xf02b2e[_0x258ed2(0x1fb)]){_0x87870c=_0xf02b2e['nextFeedTime'];const _0x43f8f9=DateTime[_0x258ed2(0x22b)](_0xf02b2e['nextFeedTime'],_0x258ed2(0x1e5),{'zone':_0x258ed2(0x224)})[_0x258ed2(0x1fc)](_0x258ed2(0x1eb));this[_0x258ed2(0x1e6)]('Next\x20feeding\x20time:\x20'+_0x43f8f9[_0x258ed2(0x1c0)]('yyyy-MM-dd\x20HH:mm:ss'),'info');}if(Array[_0x258ed2(0x1dc)](_0x34ff5b['onboarding'])&&_0x34ff5b[_0x258ed2(0x1b0)][_0x258ed2(0x19f)]===0x0){this['log'](_0x258ed2(0x1bd),_0x258ed2(0x1d4));const _0x39b5d4=await this[_0x258ed2(0x1f8)](_0x548cf4,_0x1a679a);_0x39b5d4[_0x258ed2(0x199)]&&this[_0x258ed2(0x1e6)](_0x258ed2(0x193),_0x258ed2(0x199));}await this[_0x258ed2(0x1c1)](_0x548cf4,_0x1a679a),await this[_0x258ed2(0x197)](_0x548cf4,_0x1a679a);const _0xc7fe37=await this[_0x258ed2(0x19a)](_0x548cf4,_0x1a679a);if(_0xc7fe37['success']){const {dailyRewards:_0x33946c}=_0xc7fe37['data'];for(let _0x211415=0x1;_0x211415<=0x10;_0x211415++){if(_0x33946c[_0x211415]===_0x258ed2(0x229)){this[_0x258ed2(0x1e6)]('Receiving\x20daily\x20rewards\x20'+_0x211415+_0x258ed2(0x1b4),_0x258ed2(0x1d4));const _0x1ad988=await this[_0x258ed2(0x1e4)](_0x548cf4,_0x211415,_0x1a679a);_0x1ad988['success']&&this[_0x258ed2(0x1e6)](_0x258ed2(0x1e2),_0x258ed2(0x199));break;}}}const _0x1b709c=await this[_0x258ed2(0x1e1)](_0x548cf4,_0x1a679a);_0x1b709c[_0x258ed2(0x199)]&&(this['log'](_0x258ed2(0x207)+_0x1b709c[_0x258ed2(0x1ce)]['hero'][_0x258ed2(0x204)],_0x258ed2(0x195)),this[_0x258ed2(0x1e6)]('Coins:\x20'+_0x1b709c[_0x258ed2(0x1ce)][_0x258ed2(0x1ba)][_0x258ed2(0x228)],_0x258ed2(0x195)));}}await new Promise(_0x504154=>setTimeout(_0x504154,0x7d0));}catch(_0x214019){this['log'](_0x258ed2(0x209)+(_0x1a679a+0x1)+':\x20'+_0x214019[_0x258ed2(0x1a0)],_0x258ed2(0x210));continue;}}if(_0x87870c){_0x46c1f2=this[_0x258ed2(0x1fa)](_0x87870c);const _0x4f7a70=Math['floor'](_0x46c1f2/0x3c),_0x522c83=_0x46c1f2%0x3c;this[_0x258ed2(0x1e6)]('Wait\x20'+_0x4f7a70+'\x20minute\x20'+_0x522c83+_0x258ed2(0x1f4),_0x258ed2(0x1d4));}else this[_0x258ed2(0x1e6)](_0x258ed2(0x1bb),_0x258ed2(0x1d4));await this[_0x258ed2(0x20f)](_0x46c1f2);}}catch(_0x36e126){this[_0x258ed2(0x1e6)]('Main\x20process\x20error:\x20'+_0x36e126[_0x258ed2(0x1a0)],_0x258ed2(0x210));}}}const client=new ZooAPIClient();function _0x6134(_0x3b8db9,_0x3ea188){const _0x2416ac=_0x2416();return _0x6134=function(_0x613471,_0x16107c){_0x613471=_0x613471-0x193;let _0x328641=_0x2416ac[_0x613471];return _0x328641;},_0x6134(_0x3b8db9,_0x3ea188);}function _0x2416(){const _0x72bd2c=['15QUrZgu','login','parse','Could\x20not\x20extract\x20hash\x20from\x20initData','headers','3435956LaIcgM','levels','replace','position','split','1143BmwOQk','price','UTC','map','main','Failed\x20to\x20complete\x20onboarding\x20step\x2020','coins','canTake','empty','fromFormat','Successfully\x20completed\x20onboarding!','Purchase\x20successful\x20','custom','\x20==========','buyOrUpgradeAnimals','add','success','getUserDataAfter','update','existsSync','same-site','title','length','message','find','*/*','206791UuLiTu','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/115.0.0.0\x20Safari/537.36','proxyList','TIME_WITH_SECONDS','write','magenta','post','Cannot\x20upgrade\x20','yellow','cors','3refwGK','4354042AbtzMf','dbAnimals','onboarding','No\x20proxy','4435880VjOFQe','https://api.zoo.team/user/data/after','...','stdout','\x20|\x20','luxon','get','now','hero','Use\x20default\x2024\x20hour\x20timeout','user=','Completing\x20onboarding...','null','minutes','toFormat','handleAutoFeed','digest','chat_instance=','Tool\x20developed\x20by\x20tele\x20group\x20Airdrop\x20Hunter\x20Super\x20Speed\x20(https://t.me/AirdropScript6)','createHash','key',']\x20[*]\x20Wait\x20','utf8','29970182GkAtua','stringify','Proxy\x20check\x20failed:\x20','cursorTo',']\x20[!]\x20','data','crypto','createApiHash','status','isNeedFeed','==========\x20Account\x20','info','level','https://api.zoo.team/autofeed/buy','gzip,\x20deflate,\x20br','green','Error\x20when\x20checking\x20proxy\x20IP:\x20','data.txt\x20file\x20not\x20found!','toLocaleTimeString','isArray','hash=','Failed\x20to\x20get\x20user\x20data:\x20',']\x20[ℹ]\x20','Unable\x20to\x20check\x20proxy\x20IP.\x20Status\x20code:\x20','getUserData','Daily\x20roll\x20call\x20success!','channel','claimDailyReward','yyyy-MM-dd\x20HH:mm:ss','log','Login\x20successful!','https-proxy-agent','response','photo_url','local','https://game.zoo.team','warning','https://api.zoo.team/animal/buy','2RrQGbD','getAxiosConfig','loadProxies','checkProxyIP','Feeding\x20animals\x20successfully','\x20seconds\x20until\x20next\x20feeding','toLocaleString','seconds','clearLine','finishOnboarding','path','calculateWaitTimeInSeconds','nextFeedTime','setZone','\x22Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22115\x22,\x20\x22Chromium\x22;v=\x22115\x22','https://api.zoo.team/hero/onboarding/finish','No\x20data\x20found\x20in\x20data.txt','proxy.txt','has','exit','initData\x20is\x20required','tokens','Upgrade\x20','\x22Windows\x22','Token:\x20','android','Error\x20processing\x20account\x20','floor','https://api.zoo.team/user/data/all','readFileSync','https://game.zoo.team/',']\x20[✓]\x20','countdown','error','axios','cachedData','\x20level\x20up\x20success\x20','join','1414422aaAaTW','https://api.zoo.team/quests/daily/claim','21304eiGyAu'];_0x2416=function(){return _0x72bd2c;};return _0x2416();}client[_0x5931e3(0x226)]()['catch'](_0x1ea119=>{const _0x327432=_0x5931e3;client[_0x327432(0x1e6)](_0x1ea119[_0x327432(0x1a0)],_0x327432(0x210)),process[_0x327432(0x202)](0x1);});