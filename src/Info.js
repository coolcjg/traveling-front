import SectionItem from './SectionsItem';
import InfoPrimary from './InfoPrimary';

const Info = () => {

    return(
        <>
            <div id='info'>
                <div id='sections'>
                    <SectionItem name='전체'/>
                    <SectionItem name='서울 특별시'/>
                    <SectionItem name='인천광역시'/>
                    <SectionItem name='대전광역시'/>
                    <SectionItem name='대구광역시'/>
                    <SectionItem name='광주광역시'/>
                    <SectionItem name='울산광역시'/>
                    <SectionItem name='부산광역시'/>
                    <SectionItem name='경기도'/>
                    <SectionItem name='충청북도'/>
                    <SectionItem name='충청남도'/>
                    <SectionItem name='전라북도'/>
                    <SectionItem name='전라남도'/>
                    <SectionItem name='강원도'/>
                    <SectionItem name='경상북도'/>
                    <SectionItem name='경상남도'/>
                    <SectionItem name='제주도'/>
                </div>

                <div id='primary'>
                    <InfoPrimary/>
                </div>
            </div>
        </>
    );
}

export default Info;