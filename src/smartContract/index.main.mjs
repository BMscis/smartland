// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc5, ctc4, ctc1],
      6: [ctc0, ctc2, ctc1, ctc5, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _ATTENDEE_buy7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ATTENDEE_buy7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ATTENDEE_buy7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Struct([['price', ctc3], ['amount', ctc3]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc3, ctc3, ctc3, ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v799, v800, v820, v876, v883, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc4, ctc3, ctc7, ctc3]);
  const v900 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'in',
    who: 'ATTENDEE_buy'
    });
  const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v902 = v901.price;
  const v903 = v901.amount;
  const v908 = stdlib.safeMul(v903, v800);
  const v909 = stdlib.eq(v908, v902);
  stdlib.assert(v909, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:18:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:8:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'You have to increase purchasing price',
    who: 'ATTENDEE_buy'
    });
  const v911 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v912 = v911[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v913 = stdlib.gt(v912, v903);
  stdlib.assert(v913, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:18:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:8:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'Insufficient token balance',
    who: 'ATTENDEE_buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v799, v800, v820, v876, v883, v884, v900],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v902, [[stdlib.checkedBigNumberify('./index.rsh:94:22:decimal', stdlib.UInt_max, '0'), v820]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ATTENDEE_buy"
        });
      const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
      const v928 = v927.price;
      const v934 = stdlib.add(v884, v928);
      sim_r.txns.push({
        amt: v928,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      ;
      const v937 = v927.amount;
      const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
      const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
      const v946 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v922), null);
      const v947 = {
        None: 0,
        Some: 1
        }[v946[0]];
      const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v948) {
        const v991 = stdlib.sub(v943, v937);
        const v993 = stdlib.Array_set(v942, '0', v991);
        const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
        sim_r.txns.push({
          kind: 'from',
          to: v922,
          tok: v820
          });
        const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
        const v1000 = stdlib.safeAdd(v876, v937);
        const v1002 = [true, v996, v998, v1000, v934];
        const v1003 = await txn1.getOutput('ATTENDEE_buy', 'v1002', ctc10, v1002);
        
        const v1333 = v1000;
        const v1335 = v994;
        const v1336 = v934;
        const v1339 = stdlib.gt(v996, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        if (v1339) {
          sim_r.isHalt = false;
          }
        else {
          const v1390 = v1000;
          const v1392 = v994;
          const v1393 = v934;
          const v1396 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          if (v1396) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v799,
              tok: undefined /* Nothing */
              });
            const v1399 = stdlib.sub(v996, v996);
            const v1400 = stdlib.Array_set(v995, '0', v1399);
            const v1401 = stdlib.Array_set(v994, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1400);
            const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
            const v1403 = v1402[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
            const v1404 = stdlib.sub(v1403, v996);
            const v1405 = stdlib.Array_set(v1402, '1', v1404);
            const v1406 = stdlib.Array_set(v1401, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1405);
            stdlib.simTokenBurn(sim_r, v820, v996);
            const v1407 = v1406[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
            const v1408 = v1407[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
            if (v1408) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v820);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        await stdlib.simMapSet(sim_r, 0, v922, null);
        const v957 = stdlib.sub(v943, v937);
        const v959 = stdlib.Array_set(v942, '0', v957);
        const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
        sim_r.txns.push({
          kind: 'from',
          to: v922,
          tok: v820
          });
        const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
        const v966 = stdlib.safeAdd(v876, v937);
        const v968 = [true, v962, v964, v966, v934];
        const v969 = await txn1.getOutput('ATTENDEE_buy', 'v968', ctc10, v968);
        
        const v1409 = v966;
        const v1411 = v960;
        const v1412 = v934;
        const v1415 = stdlib.gt(v962, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        if (v1415) {
          sim_r.isHalt = false;
          }
        else {
          const v1466 = v966;
          const v1468 = v960;
          const v1469 = v934;
          const v1472 = stdlib.gt(v964, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          if (v1472) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v799,
              tok: undefined /* Nothing */
              });
            const v1475 = stdlib.sub(v962, v962);
            const v1476 = stdlib.Array_set(v961, '0', v1475);
            const v1477 = stdlib.Array_set(v960, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1476);
            const v1478 = v1477[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
            const v1479 = v1478[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
            const v1480 = stdlib.sub(v1479, v962);
            const v1481 = stdlib.Array_set(v1478, '1', v1480);
            const v1482 = stdlib.Array_set(v1477, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1481);
            stdlib.simTokenBurn(sim_r, v820, v962);
            const v1483 = v1482[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
            const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
            if (v1484) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v820);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc7, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn1;
  undefined /* setApiDetails */;
  const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
  const v928 = v927.price;
  const v934 = stdlib.add(v884, v928);
  ;
  ;
  const v937 = v927.amount;
  const v939 = stdlib.safeMul(v937, v800);
  const v940 = stdlib.eq(v939, v928);
  stdlib.assert(v940, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
    msg: 'You have to increase purchasing price',
    who: 'ATTENDEE_buy'
    });
  const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v944 = stdlib.gt(v943, v937);
  stdlib.assert(v944, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
    msg: 'Insufficient token balance',
    who: 'ATTENDEE_buy'
    });
  const v946 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v922), null);
  const v947 = {
    None: 0,
    Some: 1
    }[v946[0]];
  const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v948) {
    const v991 = stdlib.sub(v943, v937);
    const v993 = stdlib.Array_set(v942, '0', v991);
    const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
    ;
    const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
    const v1000 = stdlib.safeAdd(v876, v937);
    const v1002 = [true, v996, v998, v1000, v934];
    const v1003 = await txn1.getOutput('ATTENDEE_buy', 'v1002', ctc10, v1002);
    if (v364) {
      stdlib.protect(ctc0, await interact.out(v923, v1003), {
        at: './index.rsh:92:6:application',
        fs: ['at ./index.rsh:92:6:application call to [unknown function] (defined at: ./index.rsh:92:6:function exp)', 'at ./index.rsh:99:7:application call to "rt" (defined at: ./index.rsh:95:3:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
        msg: 'out',
        who: 'ATTENDEE_buy'
        });
      }
    else {
      }
    
    const v1333 = v1000;
    const v1335 = v994;
    const v1336 = v934;
    const v1339 = stdlib.gt(v996, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    if (v1339) {
      return;
      }
    else {
      const v1390 = v1000;
      const v1392 = v994;
      const v1393 = v934;
      const v1396 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1396) {
        return;
        }
      else {
        ;
        const v1399 = stdlib.sub(v996, v996);
        const v1400 = stdlib.Array_set(v995, '0', v1399);
        const v1401 = stdlib.Array_set(v994, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1400);
        const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1403 = v1402[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1404 = stdlib.sub(v1403, v996);
        const v1405 = stdlib.Array_set(v1402, '1', v1404);
        const v1406 = stdlib.Array_set(v1401, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1405);
        undefined /* TokenBurn */;
        const v1407 = v1406[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1408 = v1407[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1408) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}}}
  else {
    await stdlib.mapSet(map0, v922, null);
    const v957 = stdlib.sub(v943, v937);
    const v959 = stdlib.Array_set(v942, '0', v957);
    const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
    ;
    const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
    const v966 = stdlib.safeAdd(v876, v937);
    const v968 = [true, v962, v964, v966, v934];
    const v969 = await txn1.getOutput('ATTENDEE_buy', 'v968', ctc10, v968);
    if (v364) {
      stdlib.protect(ctc0, await interact.out(v923, v969), {
        at: './index.rsh:92:6:application',
        fs: ['at ./index.rsh:92:6:application call to [unknown function] (defined at: ./index.rsh:92:6:function exp)', 'at ./index.rsh:99:7:application call to "rt" (defined at: ./index.rsh:95:3:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
        msg: 'out',
        who: 'ATTENDEE_buy'
        });
      }
    else {
      }
    
    const v1409 = v966;
    const v1411 = v960;
    const v1412 = v934;
    const v1415 = stdlib.gt(v962, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    if (v1415) {
      return;
      }
    else {
      const v1466 = v966;
      const v1468 = v960;
      const v1469 = v934;
      const v1472 = stdlib.gt(v964, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1472) {
        return;
        }
      else {
        ;
        const v1475 = stdlib.sub(v962, v962);
        const v1476 = stdlib.Array_set(v961, '0', v1475);
        const v1477 = stdlib.Array_set(v960, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1476);
        const v1478 = v1477[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1479 = v1478[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1480 = stdlib.sub(v1479, v962);
        const v1481 = stdlib.Array_set(v1478, '1', v1480);
        const v1482 = stdlib.Array_set(v1477, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1481);
        undefined /* TokenBurn */;
        const v1483 = v1482[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1484) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}}}
  
  
  };
export async function _ATTENDEE_redeem6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ATTENDEE_redeem6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ATTENDEE_redeem6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc4, ctc4, ctc4, ctc4]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v799, v820, v1021, v1028, v1029] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1037 = ctc.selfAddress();
  const v1039 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'in',
    who: 'ATTENDEE_redeem'
    });
  const v1040 = v1039[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1043 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1037), null);
  const v1044 = {
    None: 0,
    Some: 1
    }[v1043[0]];
  const v1045 = stdlib.eq(v1044, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1045, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:119:21:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:8:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'You\'re not a member',
    who: 'ATTENDEE_redeem'
    });
  const v1047 = stdlib.tokenEq(v1040, v820);
  stdlib.assert(v1047, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:119:21:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:8:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'Tokens are not the same',
    who: 'ATTENDEE_redeem'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v799, v820, v1021, v1028, v1029, v1039],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:11:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'), v820]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ATTENDEE_redeem"
        });
      ;
      const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
      const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
      const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
      const v1069 = stdlib.Array_set(v1065, '0', v1067);
      const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v820
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1055), null);
      const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1086 = stdlib.Array_set(v1079, '0', v1084);
      const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
      const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
      const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1092 = stdlib.Array_set(v1088, '1', v1090);
      const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
      stdlib.simTokenBurn(sim_r, v820, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
      const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
      const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
      const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
      const v1100 = [true, v1095, v1097, v1098, v1029];
      const v1101 = await txn1.getOutput('ATTENDEE_redeem', 'v1100', ctc9, v1100);
      
      const v1485 = v1098;
      const v1487 = v1093;
      const v1488 = v1029;
      const v1491 = stdlib.gt(v1097, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1491) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v799,
          tok: undefined /* Nothing */
          });
        const v1494 = stdlib.sub(v1095, v1095);
        const v1495 = stdlib.Array_set(v1094, '0', v1494);
        const v1496 = stdlib.Array_set(v1093, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1495);
        const v1497 = v1496[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1498 = v1497[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1499 = stdlib.sub(v1498, v1095);
        const v1500 = stdlib.Array_set(v1497, '1', v1499);
        const v1501 = stdlib.Array_set(v1496, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1500);
        stdlib.simTokenBurn(sim_r, v820, v1095);
        const v1502 = v1501[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1503 = v1502[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1503) {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          stdlib.simTokenDestroy(sim_r, v820);
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn1;
  undefined /* setApiDetails */;
  const v1060 = v1056[stdlib.checkedBigNumberify('./index.rsh:118:5:spread', stdlib.UInt_max, '0')];
  ;
  const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
  const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
  const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
  const v1069 = stdlib.Array_set(v1065, '0', v1067);
  const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
  ;
  const v1073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1055), null);
  const v1074 = {
    None: 0,
    Some: 1
    }[v1073[0]];
  const v1075 = stdlib.eq(v1074, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1075, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
    msg: 'You\'re not a member',
    who: 'ATTENDEE_redeem'
    });
  const v1077 = stdlib.tokenEq(v1060, v820);
  stdlib.assert(v1077, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
    msg: 'Tokens are not the same',
    who: 'ATTENDEE_redeem'
    });
  const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
  const v1086 = stdlib.Array_set(v1079, '0', v1084);
  const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
  const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
  const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
  const v1092 = stdlib.Array_set(v1088, '1', v1090);
  const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
  undefined /* TokenBurn */;
  const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
  const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
  const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
  const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
  const v1100 = [true, v1095, v1097, v1098, v1029];
  const v1101 = await txn1.getOutput('ATTENDEE_redeem', 'v1100', ctc9, v1100);
  if (v574) {
    stdlib.protect(ctc0, await interact.out(v1056, v1101), {
      at: './index.rsh:118:6:application',
      fs: ['at ./index.rsh:118:6:application call to [unknown function] (defined at: ./index.rsh:118:6:function exp)', 'at ./index.rsh:124:7:application call to "rt" (defined at: ./index.rsh:121:3:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'out',
      who: 'ATTENDEE_redeem'
      });
    }
  else {
    }
  
  const v1485 = v1098;
  const v1487 = v1093;
  const v1488 = v1029;
  const v1491 = stdlib.gt(v1097, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
  if (v1491) {
    return;
    }
  else {
    ;
    const v1494 = stdlib.sub(v1095, v1095);
    const v1495 = stdlib.Array_set(v1094, '0', v1494);
    const v1496 = stdlib.Array_set(v1093, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1495);
    const v1497 = v1496[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
    const v1498 = v1497[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
    const v1499 = stdlib.sub(v1498, v1095);
    const v1500 = stdlib.Array_set(v1497, '1', v1499);
    const v1501 = stdlib.Array_set(v1496, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1500);
    undefined /* TokenBurn */;
    const v1502 = v1501[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
    const v1503 = v1502[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
    if (v1503) {
      return;
      }
    else {
      undefined /* TokenDestroy */;
      return;
      }}
  
  
  };
export async function CREATOR(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CREATOR expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CREATOR expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc6 = stdlib.T_Object({
    evenTime: ctc2,
    eventName: ctc3,
    eventSymbol: ctc4,
    metadata: ctc3,
    price: ctc2,
    reserved: ctc2,
    tickets: ctc2,
    url: ctc5
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['price', ctc2], ['amount', ctc2]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc10, ctc2, ctc2, ctc2, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc7]);
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc2, ctc2, ctc10]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v766 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v767 = [v766];
  const v773 = stdlib.protect(ctc6, await interact.getParams(), {
    at: './index.rsh:55:114:application',
    fs: ['at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'getParams',
    who: 'CREATOR'
    });
  const v774 = v773.evenTime;
  const v775 = v773.eventName;
  const v776 = v773.eventSymbol;
  const v777 = v773.metadata;
  const v778 = v773.price;
  const v779 = v773.reserved;
  const v780 = v773.tickets;
  const v781 = v773.url;
  const v791 = stdlib.ge(v780, stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v791, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Tickets have to be more than none',
    who: 'CREATOR'
    });
  const v793 = stdlib.ge(v779, stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v793, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'You must reserve atleast one ticket',
    who: 'CREATOR'
    });
  const v795 = stdlib.gt(v780, v779);
  stdlib.assert(v795, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Reserved can\'t be more than ticket nums',
    who: 'CREATOR'
    });
  const v797 = stdlib.gt(v778, stdlib.checkedBigNumberify('./index.rsh:38:13:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Price has to be more than nil',
    who: 'CREATOR'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v780, v775, v776, v781, v777, v774, v779],
    evt_cnt: 8,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:58:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc3, ctc4, ctc5, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v800, v801, v802, v803, v804, v805, v806, v807], secs: v809, time: v808, didSend: v115, from: v799 } = txn1;
      
      ;
      const v819 = stdlib.simTokenNew(sim_r, v802, v803, v804, v805, v801, stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
      const v820 = await txn1.getOutput('internal', 'v819', ctc7, v819);
      const v830 = v767[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v831 = stdlib.Array_set(v830, '0', v801);
      const v832 = stdlib.Array_set(v767, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v831);
      const v834 = v832[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v835 = stdlib.Array_set(v834, '1', v801);
      const v836 = stdlib.Array_set(v832, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v835);
      const v837 = v836[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v838 = stdlib.Array_set(v837, '2', false);
      const v839 = stdlib.Array_set(v836, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v838);
      const v840 = v839[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '0')];
      const v841 = v840[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '1')];
      const v844 = v840[stdlib.checkedBigNumberify('./index.rsh:67:18:application', stdlib.UInt_max, '0')];
      const v853 = await ctc.getContractInfo();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc4, ctc5, ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v800, v801, v802, v803, v804, v805, v806, v807], secs: v809, time: v808, didSend: v115, from: v799 } = txn1;
  ;
  const v811 = stdlib.ge(v801, stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Tickets have to be more than none',
    who: 'CREATOR'
    });
  const v813 = stdlib.ge(v807, stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'You must reserve atleast one ticket',
    who: 'CREATOR'
    });
  const v815 = stdlib.gt(v801, v807);
  stdlib.assert(v815, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Reserved can\'t be more than ticket nums',
    who: 'CREATOR'
    });
  const v817 = stdlib.gt(v800, stdlib.checkedBigNumberify('./index.rsh:38:13:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v817, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Price has to be more than nil',
    who: 'CREATOR'
    });
  const v819 = undefined /* TokenNew */;
  const v820 = await txn1.getOutput('internal', 'v819', ctc7, v819);
  const v830 = v767[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v831 = stdlib.Array_set(v830, '0', v801);
  const v832 = stdlib.Array_set(v767, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v831);
  const v834 = v832[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v835 = stdlib.Array_set(v834, '1', v801);
  const v836 = stdlib.Array_set(v832, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v835);
  const v837 = v836[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v838 = stdlib.Array_set(v837, '2', false);
  const v839 = stdlib.Array_set(v836, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v838);
  const v840 = v839[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '0')];
  const v841 = v840[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '1')];
  const v842 = stdlib.eq(v841, v801);
  stdlib.assert(v842, {
    at: './index.rsh:66:10:application',
    fs: [],
    msg: 'Supply must be equal to tickets',
    who: 'CREATOR'
    });
  const v844 = v840[stdlib.checkedBigNumberify('./index.rsh:67:18:application', stdlib.UInt_max, '0')];
  const v845 = stdlib.eq(v844, v801);
  stdlib.assert(v845, {
    at: './index.rsh:67:10:application',
    fs: [],
    msg: 'Balance must be equal to tickets',
    who: 'CREATOR'
    });
  const v850 = stdlib.eq(v841, v844);
  stdlib.assert(v850, {
    at: './index.rsh:68:10:application',
    fs: [],
    msg: 'Balance must be equal to supply',
    who: 'CREATOR'
    });
  const v853 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v853, v820, v841, v844), {
    at: './index.rsh:72:26:application',
    fs: ['at ./index.rsh:72:26:application call to [unknown function] (defined at: ./index.rsh:72:26:function exp)', 'at ./index.rsh:72:26:application call to "liftedInteract" (defined at: ./index.rsh:72:26:application)'],
    msg: 'notify',
    who: 'CREATOR'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v799, v800, v807, v820, v839, v840, v844],
    evt_cnt: 0,
    funcNum: 1,
    lct: v808,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v861, time: v860, didSend: v215, from: v859 } = txn2;
      
      ;
      const v871 = stdlib.sub(v844, v807);
      const v873 = stdlib.Array_set(v840, '0', v871);
      const v874 = stdlib.Array_set(v839, stdlib.checkedBigNumberify('./index.rsh:77:31:application', stdlib.UInt_max, '0'), v873);
      sim_r.txns.push({
        kind: 'from',
        to: v799,
        tok: v820
        });
      
      const v876 = v807;
      const v877 = v860;
      const v883 = v874;
      const v884 = stdlib.checkedBigNumberify('./index.rsh:53:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
        const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
        const v897 = stdlib.gt(v896, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        
        return v897;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v1021 = v876;
        const v1022 = v877;
        const v1028 = v883;
        const v1029 = v884;
        
        if (await (async () => {
          const v1034 = v1028[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '0')];
          const v1035 = v1034[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '1')];
          const v1036 = stdlib.gt(v1035, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          
          return v1036;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v799,
            tok: undefined /* Nothing */
            });
          const v1119 = v1028[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1126 = stdlib.sub(v1120, v1120);
          const v1128 = stdlib.Array_set(v1119, '0', v1126);
          const v1129 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1128);
          const v1130 = v1129[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
          const v1132 = stdlib.sub(v1131, v1120);
          const v1134 = stdlib.Array_set(v1130, '1', v1132);
          const v1135 = stdlib.Array_set(v1129, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1134);
          stdlib.simTokenBurn(sim_r, v820, v1120);
          const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
          const v1137 = v1136[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
          if (v1137) {
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v820);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc2, ctc2, ctc7, ctc15, ctc14, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v861, time: v860, didSend: v215, from: v859 } = txn2;
  ;
  const v862 = stdlib.addressEq(v799, v859);
  stdlib.assert(v862, {
    at: './index.rsh:73:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'CREATOR'
    });
  const v871 = stdlib.sub(v844, v807);
  const v873 = stdlib.Array_set(v840, '0', v871);
  const v874 = stdlib.Array_set(v839, stdlib.checkedBigNumberify('./index.rsh:77:31:application', stdlib.UInt_max, '0'), v873);
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:78:25:application',
    fs: ['at ./index.rsh:78:25:application call to [unknown function] (defined at: ./index.rsh:78:25:function exp)', 'at ./index.rsh:78:25:application call to "liftedInteract" (defined at: ./index.rsh:78:25:application)'],
    msg: 'ready',
    who: 'CREATOR'
    });
  
  let v876 = v807;
  let v877 = v860;
  let v883 = v874;
  let v884 = stdlib.checkedBigNumberify('./index.rsh:53:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
    const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
    const v897 = stdlib.gt(v896, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    
    return v897;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn4;
    undefined /* setApiDetails */;
    const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
    const v928 = v927.price;
    const v934 = stdlib.add(v884, v928);
    ;
    ;
    const v937 = v927.amount;
    const v939 = stdlib.safeMul(v937, v800);
    const v940 = stdlib.eq(v939, v928);
    stdlib.assert(v940, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
      msg: 'You have to increase purchasing price',
      who: 'CREATOR'
      });
    const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
    const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
    const v944 = stdlib.gt(v943, v937);
    stdlib.assert(v944, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
      msg: 'Insufficient token balance',
      who: 'CREATOR'
      });
    const v946 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v922), null);
    const v947 = {
      None: 0,
      Some: 1
      }[v946[0]];
    const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    if (v948) {
      const v991 = stdlib.sub(v943, v937);
      const v993 = stdlib.Array_set(v942, '0', v991);
      const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
      ;
      const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
      const v1000 = stdlib.safeAdd(v876, v937);
      const v1002 = [true, v996, v998, v1000, v934];
      await txn4.getOutput('ATTENDEE_buy', 'v1002', ctc11, v1002);
      const cv876 = v1000;
      const cv877 = v924;
      const cv883 = v994;
      const cv884 = v934;
      
      v876 = cv876;
      v877 = cv877;
      v883 = cv883;
      v884 = cv884;
      
      txn3 = txn4;
      continue;}
    else {
      await stdlib.mapSet(map0, v922, null);
      const v957 = stdlib.sub(v943, v937);
      const v959 = stdlib.Array_set(v942, '0', v957);
      const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
      ;
      const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
      const v966 = stdlib.safeAdd(v876, v937);
      const v968 = [true, v962, v964, v966, v934];
      await txn4.getOutput('ATTENDEE_buy', 'v968', ctc11, v968);
      const cv876 = v966;
      const cv877 = v924;
      const cv883 = v960;
      const cv884 = v934;
      
      v876 = cv876;
      v877 = cv877;
      v883 = cv883;
      v884 = cv884;
      
      txn3 = txn4;
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.soldOut(v820, v853), {
    at: './index.rsh:106:25:application',
    fs: ['at ./index.rsh:106:25:application call to [unknown function] (defined at: ./index.rsh:106:25:function exp)', 'at ./index.rsh:106:25:application call to "liftedInteract" (defined at: ./index.rsh:106:25:application)'],
    msg: 'soldOut',
    who: 'CREATOR'
    });
  
  let v1021 = v876;
  let v1022 = v877;
  let v1028 = v883;
  let v1029 = v884;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1034 = v1028[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '0')];
    const v1035 = v1034[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '1')];
    const v1036 = stdlib.gt(v1035, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
    
    return v1036;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn5;
    undefined /* setApiDetails */;
    const v1060 = v1056[stdlib.checkedBigNumberify('./index.rsh:118:5:spread', stdlib.UInt_max, '0')];
    ;
    const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
    const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
    const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
    const v1069 = stdlib.Array_set(v1065, '0', v1067);
    const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
    ;
    const v1073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1055), null);
    const v1074 = {
      None: 0,
      Some: 1
      }[v1073[0]];
    const v1075 = stdlib.eq(v1074, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v1075, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'You\'re not a member',
      who: 'CREATOR'
      });
    const v1077 = stdlib.tokenEq(v1060, v820);
    stdlib.assert(v1077, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'Tokens are not the same',
      who: 'CREATOR'
      });
    const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
    const v1086 = stdlib.Array_set(v1079, '0', v1084);
    const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
    const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
    const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
    const v1092 = stdlib.Array_set(v1088, '1', v1090);
    const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
    undefined /* TokenBurn */;
    const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
    const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
    const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
    const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
    const v1100 = [true, v1095, v1097, v1098, v1029];
    await txn5.getOutput('ATTENDEE_redeem', 'v1100', ctc11, v1100);
    const cv1021 = v1098;
    const cv1022 = v1057;
    const cv1028 = v1093;
    const cv1029 = v1029;
    
    v1021 = cv1021;
    v1022 = cv1022;
    v1028 = cv1028;
    v1029 = cv1029;
    
    txn4 = txn5;
    continue;
    
    }
  ;
  const v1119 = v1028[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1126 = stdlib.sub(v1120, v1120);
  const v1128 = stdlib.Array_set(v1119, '0', v1126);
  const v1129 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1128);
  const v1130 = v1129[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
  const v1132 = stdlib.sub(v1131, v1120);
  const v1134 = stdlib.Array_set(v1130, '1', v1132);
  const v1135 = stdlib.Array_set(v1129, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1134);
  undefined /* TokenBurn */;
  const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
  const v1137 = v1136[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
  if (v1137) {
    stdlib.protect(ctc0, await interact.end(), {
      at: './index.rsh:138:23:application',
      fs: ['at ./index.rsh:138:23:application call to [unknown function] (defined at: ./index.rsh:138:23:function exp)', 'at ./index.rsh:138:23:application call to "liftedInteract" (defined at: ./index.rsh:138:23:application)'],
      msg: 'end',
      who: 'CREATOR'
      });
    
    return;
    }
  else {
    undefined /* TokenDestroy */;
    stdlib.protect(ctc0, await interact.end(), {
      at: './index.rsh:138:23:application',
      fs: ['at ./index.rsh:138:23:application call to [unknown function] (defined at: ./index.rsh:138:23:function exp)', 'at ./index.rsh:138:23:application call to "liftedInteract" (defined at: ./index.rsh:138:23:application)'],
      msg: 'end',
      who: 'CREATOR'
      });
    
    return;
    }
  
  
  
  };
export async function ATTENDEE_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ATTENDEE_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ATTENDEE_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _ATTENDEE_buy7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function ATTENDEE_redeem(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ATTENDEE_redeem expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ATTENDEE_redeem expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _ATTENDEE_redeem6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`ATTENDEE_buy((uint64,uint64))(byte,uint64,uint64,uint64,uint64)`, `ATTENDEE_redeem(uint64)(byte,uint64,uint64,uint64,uint64)`],
    pure: [],
    sigs: [`ATTENDEE_buy((uint64,uint64))(byte,uint64,uint64,uint64,uint64)`, `ATTENDEE_redeem(uint64)(byte,uint64,uint64,uint64,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAOAAEIBAUgKNLtxKcEBzAGoI0GAgMmAwEAAQEAIjUAMRhBBbUqZEkiWzUBJFs1AjEZIxJBAAgxACgoZkIFhDYaABdJQQAlIjUEIzUGSSEHDEAACiEHEkQ2GgFCACyB37PP4QMSRDYaAUIBnjYaAhc1BDYaAzYaARdJJQxAAnVJIQQMQAGDIQQSRCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQZbNf0hCVs1/Fc4ETX7STUFNfqABOUCmNw0+lCwNPpJNfkiWzX4NAOBSVs0+Ag19zT4iAUiNPkkW0k19jT+CzT4EkQ0+1cAEUk19SJbSTX0NPYNRDEAiATxIlUjEkEAezT7NPU09DT2CRZcAFwANfOxIrIBNPayEiWyEDEAshQ0/bIRszTzVwARNfI0/DT2CDXxgAgAAAAAAAAD6ik08lcACFA08lcICFA08RZQNPcWUFCwKTTyVwAIUDTyVwgIUDTxFlA09xZQNQc0/zT+NP008TIGNPM090IDGjEAKClmNPs09TT0NPYJFlwAXAA187EisgE09rISJbIQMQCyFDT9shGzNPNXABE18jT8NPYINfGACAAAAAAAAAPIKTTyVwAIUDTyVwgIUDTxFlA09xZQULApNPJXAAhQNPJXCAhQNPEWUDT3FlA1BzT/NP40/TTxMgY08zT3QgKaSCEKNAESRDQESSISTDQCEhFEKGRJNQNJSSEFWzX/VzARNf6BQVs1/Uk1BTX8gATOPHBmNPxQsDT+VwARNfs0/jT7SSJbIwgWXABcADX6IzT/iAPAMQCIA5YiVSMSRDT8FzT/EkQ0+lcAETX5NPo0+UkiWyMJFlwAXABJNfhXABE19zT4NPdJJFsjCRZcCFwASTX2VwARNfU0AyEGWyMJNfSACAAAAAAAAARMKTT1VwAIUDT1VwgIUDT0FlA0/RZQULApNPVXAAhQNPVXCAhQNPQWUDT9FlA1BzQDVwAgNP809DIGNPY0/UICAEkjDEAAciMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/iEJWzX9gASai5F0sDT/MQASRLEisgE0/rISJbIQNP+yFDT9shGzNP80AyEFWzT9NP4yBjQDVzgRNANXSRE0A4FaWzT+CRZcAFwAIkIBN0ghC4gCkyI0ARJENARJIhJMNAISEURJNQVJSkpKIls1/yRbNf5XECA1/VcwCDX8VzhgNftXmCA1+oG4AVs1+YHAAVs1+IAEeaxmqjT/FlA0/hZQNP1QNPxQNPtQNPpQNPkWUDT4FlCwgRGvNfc0/iEMD0Q0+CMPRDT+NPgNRDT/Ig1EIQuIAhGxIrIBIQ2yEDT+siIisiM0/LIlNP2yJjT7sic0+rIoMgqyKbO0PDX2gAgAAAAAAAADMzT2FlCwNPY19TT3SVcAETT+FlwAXABJNfRJVwARNP4WXAhcAEk180lXABEoXBBcAEk18lcAEUk18SRbSTXwNP4SRDTxIltJNe80/hJENPA07xJEMQA0/xZQNPgWUDT1FlA08lA08VA07xZQKEsBVwBiZ0gjNQEyBjUCQgEDNf81/jX9Nfw1+zX6Nfk0/lcAESJbIg1BACg0+TT6FlA0+xZQNPwWUDT+UDT/FlAoSwFXAFFnSCEINQEyBjUCQgDBNPk0+zT8NP00/jT/QgAANf81/jX9Nfw1+zX6NP5XABFJNfkkWyINQQAkNPo0+xZQNPwWUDT+UDT/FlAoSwFXAElnSCEKNQEyBjUCQgBzsSKyATT/sggjshA0+rIHszT5Ils1+DT+NPk0+EkJFlwAXABJNfdXABE19jT3NPZJJFs0+AkWXAhcAFcAEVcQARdBAANCABCxIrIBIQ2yEDT7siGzQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEMMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:107:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:32:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "ATTENDEE_buy": ATTENDEE_buy,
  "ATTENDEE_redeem": ATTENDEE_redeem,
  "CREATOR": CREATOR
  };
export const _APIs = {
  ATTENDEE: {
    buy: ATTENDEE_buy,
    redeem: ATTENDEE_redeem
    }
  };
