import React, {useEffect, useState,useCallback} from 'react'
import {View, Text, FlatList} from 'react-native'
import env from "../environments/env";

const Item = ({title}) => (<View>
    <Text>{title}</Text>
</View>)

export const CharacterList = () => {

    const [data, setData] = useState([]);
    const [nextPageURL, setNextPageURL] = useState(null);
    const numCols = Math.ceil(window.width / 220);
    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, [])

    const getData = useCallback(async () => {
        const apiEndPoint = nextPageURL
            ? nextPageURL
            : env.characterURL;
        fetch(apiEndPoint)
            .then(response => response.json())
            .then(resp => {
                setNextPageURL(resp.info.next);
                setData(prevData => {
                    return [...prevData, ...resp.results];
                });
            });
    }, [nextPageURL]);

    return (<View>
        <FlatList
            onEndReached={getData}
            key={numCols}
            data={data}
            renderItem={({item}) => <Item title={item.name}/>}
            keyExtractor={(item, idx) => `${item.name}_${idx}`}
        />
    </View>)
}


