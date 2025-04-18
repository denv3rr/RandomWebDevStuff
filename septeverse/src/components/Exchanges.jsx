import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Title } from 'chart.js';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return <Loader />;

    return (
    <>
        <Text level={3} className='heading'>
            Info on all of the <em>top crypto exchanges</em> coming soon!<br></br>
            In the mean time, please consider checking out some of our merchandise at:<br></br><br></br>
            <a href='http://seperet.com'>seperet.com</a><br></br>
        </Text>
        {/*<Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
        </Row>
        <Row>
            {exchangesList.map((exchange) => (
                <Col span={24}>
                    <Collapse>
                        <Panel
                            key={exchange.uuid}
                            showArrow={false}
                            header={(
                                <Row key={exchange.uuid}>
                                    <Col span={6}>
                                        <Text><strong>{exchange.rank}.</strong></Text>
                                        <Avatar className="exchange-image" src={exchange.iconUrl} />
                                        <Text><strong>{exchange.name}</strong></Text>
                                    </Col>
                                    <Col span={6}>{millify(exchange.volume)}</Col>
                                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                                </Row>
                            )}
                        >
                            {HTMLReactParser(exchange.description || '')}
                        </Panel>
                    </Collapse>
                </Col>
            ))}
        </Row>*/}
    </>
    );
};

export default Exchanges;