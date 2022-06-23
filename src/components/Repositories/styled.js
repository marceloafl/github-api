import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    margin-top: 16px;
    margin-left: 35%;
    width: 50%;
`

export const WrapperTablist = styled(TabList)`
    display: flex;
    list-style-type: none;
    margin: 0 16px;
    padding: 4px;
`;
WrapperTablist.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    background-color: #FFF;
    border: 1px solid #CCC;
    border-radius: 16px;
    cursor: pointer;
    margin: 8px;
    padding: 16px;
    user-select: none;
    z-index: 9999;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
    };
`
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    margin-top: -5px;
    padding: 16px;

    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;