import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DaySummary } from 'models/Entry';
import { useState } from 'react';

interface ISummaryTable {
    daySummaries: DaySummary[];
    categories: string[];
}

export const SummaryTable = (props: ISummaryTable) => {
    const daySummaries = props.daySummaries ?? [];
    const categories = props.categories ?? [];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        {categories.map((category) => (
                            <TableCell align="right">{category}</TableCell>
                        ))}
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {daySummaries.map((daySummary, index) => (
                        <SummaryRow {...{ key: daySummary.id, daySummary, categories, index }} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

interface ISummaryRow {
    daySummary: DaySummary;
    categories: string[];
    index: number;
}

const SummaryRow = ({ daySummary, categories, index }: ISummaryRow) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow className={index % 2 ? 'bg-gray-100' : ''}>
                <TableCell component="th" scope="row">
                    {daySummary.date}
                </TableCell>
                {categories.map((category) => {
                    return <TableCell align="right">{daySummary.summary[category]?.points ?? 0}</TableCell>;
                })}
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <EntryDetailTable {...{ daySummary, open }}></EntryDetailTable>
        </>
    );
};

interface IEntryDetailTable {
    daySummary: DaySummary;
    open: boolean;
}

const EntryDetailTable = ({ daySummary, open }: IEntryDetailTable) => {
    return (
        <TableRow>
            <TableCell className={'px-0 py-0' + (open ? '' : ' border-b-transparent border-b-0')} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box className="">
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow className="bg-gray-100">
                                    <TableCell className="pl-6 border-none">Date</TableCell>
                                    <TableCell className="border-none">Category</TableCell>
                                    <TableCell className="border-none">Description</TableCell>
                                    <TableCell className="border-none">Link</TableCell>
                                    <TableCell className="border-none" align="right">
                                        Points
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {daySummary.entries
                                    ? daySummary.entries.map((entry) => (
                                          <TableRow key={entry.id} className="even:bg-gray-100">
                                              <TableCell className="pl-6 border-none" component="th" scope="row">
                                                  {entry.dateTime}
                                              </TableCell>
                                              <TableCell className="border-none">{entry.category}</TableCell>
                                              <TableCell className="border-none">{entry.description}</TableCell>
                                              <TableCell className="border-none">{entry.link}</TableCell>
                                              <TableCell className="border-none" align="right">
                                                  {entry.points}
                                              </TableCell>
                                          </TableRow>
                                      ))
                                    : null}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};
