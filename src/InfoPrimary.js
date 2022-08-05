const InfoPrimary = () =>{

    return (
        <>
            <div>

                <div className='info-primary-search-container'>
                    
                    <div className='info-primary-search-inner-container'>
                        <div className='gu-container'>
                            <label htmlFor="gu">구 : </label>
                            <select id="gu">
                                <option>전체</option>
                                <option>금천구</option>
                                <option>구로구</option>
                                <option>강남구</option>
                            </select>
                        </div>

                        <div className='filter-container'>
                            <label htmlFor="filter">검색조건 : </label>
                            <select id="filter">
                                <option>전체</option>
                                <option>제목</option>
                                <option>글쓴이</option>
                            </select>

                            <input type='text'/>
                        </div>

                        <button>조회</button>
                    </div>

                </div>

                <div className='info-primary-table-container'>
                    <table className='info-primary-table'>
                        <colgroup>
                            <col style={{width:'10%'}}/>
                            <col style={{width:'10%'}}/>
                            <col style={{width:'30%'}}/>
                            <col style={{width:'10%'}}/>
                            <col style={{width:'15%'}}/>
                            <col style={{width:'10%'}}/>
                        </colgroup>

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>지역</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>날짜</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>구로구</td>
                                <td>이얏호</td>
                                <td>최종규</td>
                                <td>2022-08-05 14:00</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>구로구</td>
                                <td>이얏호</td>
                                <td>최종규</td>
                                <td>2022-08-05 14:00</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>구로구</td>
                                <td>이얏호</td>
                                <td>최종규</td>
                                <td>2022-08-05 14:00</td>
                                <td>1</td>
                            </tr>                                        
                        </tbody>
                    </table>
                </div>

                <div className='info-primary-paging'>
                    <a href=''>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href=''>4</a>

                </div>

            </div>
            
        </>
    );
}

export default InfoPrimary;