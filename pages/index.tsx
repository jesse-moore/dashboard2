import { SummaryTable } from 'components/tables/summary-table/SummaryTable';
import useSWR from 'swr';

const fetcher = (args: RequestInfo | URL) => fetch(args).then((res) => res.json());
const IndexPage = () => {
    const { data: daySummaries, error } = useSWR('/api/summaries', fetcher);
    const { data: categories, error: categoiresError } = useSWR('/api/lookup/categories', fetcher);

    if (error || categoiresError) return <div>Failed to load</div>;

    return (
        <div className="mx-auto max-w-fit">
            <SummaryTable {...{ categories, daySummaries }}></SummaryTable>
        </div>
    );
};

export default IndexPage;
