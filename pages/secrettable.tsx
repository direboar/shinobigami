import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

import { styled } from "@mui/material/styles";

function createData(
  name: string,
  abstruct: string,
  handout: string,
  mission: string,
  secrets: string
) {
  return {
    name,
    abstruct,
    handout,
    mission,
    secrets,
  };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(4n+1)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(4n+2)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//ReturnType 関数の戻り値を型として使用する。
//@see https://tech-1natsu.hatenablog.com/entry/2018/12/09/004338
function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="left">{row.abstruct}</StyledTableCell>
        <StyledTableCell align="left">{row.mission}</StyledTableCell>
        <StyledTableCell align="left">
          <IconButton color="primary" aria-label="add an alarm">
            <EditSharpIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <DeleteForeverSharpIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container>
              <Grid item xs={6} sx={{ border: 1, borderColor: "primary.main" }}>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    概要
                  </Typography>
                  <Typography
                    variant="body2"
                    whiteSpace="pre-line"
                    color="text.primary"
                  >
                    {row.handout}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ border: 1 }}>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    秘密
                  </Typography>
                  <Typography
                    variant="body2"
                    whiteSpace="pre-line"
                    color="text.primary"
                  >
                    {row.secrets}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

const handout = `あなたは、西園寺家の当主だ。西園寺家の当主は、代々強力な退魔の力を持つといわれている。

若い頃に妻（or 夫）を亡くしたあなたは、娘（or 息子）に愛情を注いできた。

怪盗Xの犯行予告状など、ふざけた話だ。
そして、何より愛しいわが子に何かあってはならない。
あなたの使命は「PC①の犯行を阻止する」ことだ。

あなたはプライズ「白光輝石」を所持している。`;

const secrets = `西園寺家は、鞍馬心流のシノビ「雷天丸」の流れをくむ家系である。
あなたは「雷天丸」の力を受け継いでいる。

PC②はあなたとは血縁関係にない。18年前のある日、まだ赤子であるPC②を連れてPC①があなたの元を訪れた。PC②は異常な妖気を放っており、PC①はあなたが持つ退魔の力を見込んでPC②を救ってほしいと助けを求めてきたのだ。PC②が強大な妖魔による浸食を受けていると判断したあなたは、PC②を預かることにした。そしてPC①が立ち去った後、あなたはPC②を妖魔の力による浸食から守るため、「白光輝石」を起動しPC②を対象として封印を発動した。

あなたの本当の使命は、「PC②を妖魔の企みから守り、封印の外でも自由に生きられるようにする」ことだ。

あなたは、若くして亡くした妻（or 夫）に対して、今でも深い執着心を持っている。

<<補足>>
・「雷天丸」は、今から数百年前ぐらいに存在したシノビです。
・PC②の推奨年齢（10代後半～20代前半を推奨）はダミーで絶対に18歳になります。`;

const rows = [
  createData(
    "PC1",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "PC2",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "PC3",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "PC4",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "PC5",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "NPC1",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "NPX2",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
  createData(
    "プライズ",
    "隠忍の血統",
    handout,
    "人の世を蹂躙し、生き残る。",
    secrets
  ),
];

export default function CollapsibleTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell />
              <StyledTableCell>ハンドアウト名</StyledTableCell>
              {/* <TableCell align="left">概要</TableCell> */}
              <StyledTableCell align="left">概要</StyledTableCell>
              <StyledTableCell align="left">設定</StyledTableCell>
              <StyledTableCell align="left">
                <IconButton color="primary" aria-label="add an alarm">
                  <AddSharpIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>この下に秘密のマトリクス</div>
      <div>この下に全画面共通でチャットボックスが欲しい</div>
    </>
  );
}
