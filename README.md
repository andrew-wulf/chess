# Chess
**I migrated my code from another of my repositories, to view the commit history look [here!](https://github.com/andrew-wulf/portfolio-frontend/tree/main/src/Chess/src)**

A fully functional chess match created with javascript and the phaser library. The entire game was written from scratch, with the exception of the piece image assets and sound files (they're publically available and created by chess.com).  
  
You can click and drag pieces to move, or click once on a piece and then click again on a destination square.  
The game engine only allows legal moves, and accounts for different piece movements, piece collision, captures, checks, discovered checks, legal castling, piece promotion and, even en passant!  

Play continues until checkmate, stalemate or draw by repetition.  
  
As an added bonus, you can play against the stockfish api by going into the game options and setting it to CPU. Because stockfish is unbeatable at any decent depth, I only put in the options to play at depths 1 - 7 (it's still quite challenging!)  
  
more detailed breakdown coming soon...