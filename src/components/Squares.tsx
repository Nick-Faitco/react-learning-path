import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faO, faX } from '@fortawesome/free-solid-svg-icons';

type SquareProps = {
  squareId: number;
  playersTurn: number;
  gameResults: string | undefined;
  totalMoveCounter: number;
  existingMove:
    | {
        id: number;
        selectedMovesArr: number[];
      }
    | undefined;
  handleMoves: (squareId: number, playersTurn: number, totalMoveCounter: number) => void;
};

const Squares = (props: SquareProps) => {
  const {squareId, playersTurn, gameResults, totalMoveCounter, existingMove, handleMoves} = props;

  const handleClick = () => {
    console.log('this is a click');
    handleMoves(squareId, playersTurn, totalMoveCounter);
  }

    return (
    <Box
      onClick={() => {
        if (existingMove || gameResults) return;
        handleClick();
      }}
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "125px",
        m: 1,
        borderRadius: 1,
        border: 'solid 2px red',
        width: '100%'

      }}
    >
      {existingMove && (
        <>
          {existingMove.id === 1 ? (
            <FontAwesomeIcon icon={faX} size='2xl' style={{ color: "#46a3ff" }} />
          ) : (
            <FontAwesomeIcon icon={faO} size='2xl' style={{ color: "#ff827e" }} />
          )}
        </>
      )}
    </Box>
  );
};

export default Squares;