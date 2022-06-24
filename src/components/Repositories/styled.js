import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    margin-top: 16px;    
    width: 100%;
`;

export const WrapperTablist = styled(TabList)`
    align-items: center;
    background-color: #FFF;
    border-bottom: 1px solid #CCC;
    display: flex;
    height: 48px;
    list-style-type: none;
    position: sticky;
    top: 0;
    width: 100%;

    @media(max-width: 640px){            
        border-bottom: 1px solid #000;
        justify-content: space-around;
        padding: 8px 0;
    }
`;
WrapperTablist.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    cursor: pointer;
    margin: 0 16px;
    user-select: none;
    z-index: 9999;

    &:focus {
        outline: none;
    }

    &.is-selected {
        font-weight: bold;
        text-decoration: underline #008000 solid 3px;
    };
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    width: 100%;

    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 32px;
    width: 100%;

    @media(max-width: 640px){
        margin: 0;
    }
`;