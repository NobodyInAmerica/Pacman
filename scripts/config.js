var game = exports.game =
  { GENERATOR_INTERVAL: 20,
    LARGE_FRUIT_DURATION: 10,
    LARGE_FRUIT_ENHANCEMENT: 10,
    content:
     [ [ 0, 16, 0, 0, 0, 0, 16, 0 ],
       [ 16, 0, 0, 0, 0, 0, 0, 16 ],
       [ 0, 16, 0, 32, 32, 0, 16, 0 ],
       [ 1, 0, 16, 0, 0, 16, 0, 2 ],
       [ 0, 16, 0, 16, 16, 0, 16, 0 ],
       [ 4, 0, 16, 0, 0, 16, 0, 8 ],
       [ 0, 16, 0, 32, 32, 0, 16, 0 ],
       [ 16, 0, 0, 0, 0, 0, 0, 16 ],
       [ 0, 16, 0, 0, 0, 0, 16, 0 ] ],
    height: 9,
    seed: 1461677830,
    static:
     [ [ 31, 12, 5, 1, 1, 5, 6, 31 ],
       [ 1, 5, 5, 6, 12, 5, 5, 1 ],
       [ 8, 5, 5, 3, 9, 5, 5, 2 ],
       [ 2, 11, 9, 6, 12, 3, 11, 8 ],
       [ 8, 2, 8, 7, 13, 2, 8, 2 ],
       [ 2, 14, 12, 3, 9, 6, 14, 8 ],
       [ 8, 5, 5, 6, 12, 5, 5, 2 ],
       [ 4, 5, 5, 3, 9, 5, 5, 4 ],
       [ 31, 9, 5, 4, 4, 5, 3, 31 ] ],
    width: 8 };

var scripts = exports.scripts =
  [ "node bin/main.js", "bin/sample",
    "bin/sample", "bin/sample" ];
