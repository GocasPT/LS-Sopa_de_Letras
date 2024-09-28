import './background.css';
import A from '../../assets/letters/A.png';
import B from '../../assets/letters/B.png';
import C from '../../assets/letters/C.png';
import D from '../../assets/letters/D.png';
import E from '../../assets/letters/E.png';
import F from '../../assets/letters/F.png';
import G from '../../assets/letters/G.png';
import H from '../../assets/letters/H.png';
import I from '../../assets/letters/I.png';
import J from '../../assets/letters/J.png';
import K from '../../assets/letters/K.png';
import L from '../../assets/letters/L.png';
import M from '../../assets/letters/M.png';
import N from '../../assets/letters/N.png';
import O from '../../assets/letters/O.png';
import P from '../../assets/letters/P.png';
import Q from '../../assets/letters/Q.png';
import R from '../../assets/letters/R.png';
import S from '../../assets/letters/S.png';
import T from '../../assets/letters/T.png';
import U from '../../assets/letters/U.png';
import V from '../../assets/letters/V.png';
import W from '../../assets/letters/W.png';
import X from '../../assets/letters/X.png';
import Y from '../../assets/letters/Y.png';
import Z from '../../assets/letters/Z.png';

const LETTERS = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
];

function Background({ height, weight }) {
    const backgroundRow = (max, rowIndex) => {
        return Array.from({ length: max }, (_, i) => (
            <img
                key={`${rowIndex}-${i}`}
                src={LETTERS[Math.floor(Math.random() * LETTERS.length)]}
                alt="letter"
            />
        ));
    };

    const generateBackground = (rows) => {
        return Array.from({ length: rows }, (_, i) => (
            <div className="row" key={i} style={{ '--row-index': i }}>
                <div>{backgroundRow(Math.floor((weight * 2) / 25), i)}</div>
            </div>
        ));
    };

    const rows = Math.ceil(height / 60);

    return <section id="background">{generateBackground(rows)}</section>;
}

export default Background;
