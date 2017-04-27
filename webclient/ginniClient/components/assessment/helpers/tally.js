Object.defineProperty(exports,"__esModule",{value:true});
const tally = arr => {
  return arr.map(item => {
    return item.tries;
  }).reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

// const tally = function(arr){
// 	return arr.map(function(item){
// 		return item.tries;
// 	}).reduce(function(acc, item){
// 		acc[item] =(acc[item] || 0) + 1;
// 		return acc;
// 	}, {});
// };

exports.default=tally;
