import React from 'react'
import { useTable } from 'react-table'
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Settingranking = () => {

    const isActive = useSelector((state) => state?.hambergSlice?.value);

    const data = React.useMemo(
        () => [
            {
                id: '001',
                CourseName: 'B.Tech',
                action: [<button className='table_btn edit_btn'>View/Edit</button>, <button className='table_btn delete_btn'>Delete</button>],
            },

        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', // accessor is the "key" in the data
            },
            {
                Header: 'Course Name',
                accessor: 'CourseName',
            },
            {
                Header: 'Action ',
                accessor: 'action',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })


    return (
        <>

            <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Ranking</h1>
                                <button className='add_btn'> <NavLink to='/addnewcms'> <AiOutlinePlus /> </NavLink> </button>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div style={{ overflowX: 'auto' }}>

                                    <table {...getTableProps()} className="data_table">
                                        <thead>
                                            {headerGroups.map(headerGroup => (
                                                <tr className='table_head' {...headerGroup.getHeaderGroupProps()}>
                                                    {headerGroup.headers.map(column => (
                                                        <th className='table_td'
                                                            {...column.getHeaderProps()}

                                                        >
                                                            {column.render('Header')}
                                                        </th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody {...getTableBodyProps()}>
                                            {rows.map(row => {
                                                prepareRow(row)
                                                return (
                                                    <tr {...row.getRowProps()} className='table_row'>
                                                        {row.cells.map(cell => {
                                                            return (
                                                                <td className='table_body'
                                                                    {...cell.getCellProps()}
                                                                >
                                                                    {cell.render('Cell')}
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default Settingranking
