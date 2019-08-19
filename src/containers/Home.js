import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'

import { Header, Left, Icon, Button, Right, Toast } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../Colors/Colors';


const listData = ['Live Musician', 'Magician', 'Painter', 'Movie Play', 'Dancer', 'Guitarist', 'Dj']

export default class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            categories: [],
            popularCategories: []
        }

    }


    renderItemHorizontally = ({ item, index }) => (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ArtistsSub', { categoryid: item.id, name: item.name })}
                style={{ flexDirection: 'column', borderRadius: 2, }}>
                <Image
                    style={{ width: 130, height: 100, }}
                    source={{ uri: 'https://news.artnet.com/app/news-upload/2019/02/IMG_5085-768x1024.jpeg' }}
                />

                <Text style={{ margin: 10, fontSize: 14 }}>{'Item'}</Text>


            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View
                style={{ flex: 1, }}>
                <Header style={{ backgroundColor: Colors.appColor }}>
                    <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Button
                            style={{ padding: 10 }}
                            transparent
                            >
                            <Icon name='menu' />

                        </Button>

                        <Text style={{ fontSize: 18, padding: 10, color: '#fff', fontWeight: 'bold' }}>{'Explore  '}</Text>
                    </Left>

                    <Right></Right>
                </Header>

                <ScrollView>

                    <TouchableOpacity style={{
                        flexDirection: 'row', borderWidth: 1, borderColor: '#ddd',
                        paddingLeft: 10, padding: 5, margin: 10, borderRadius: 4,
                        backgroundColor: '#fff', shadowColor: "#ddd",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 3,
                            width: 2
                        }
                    }}>
                        <Icon name='search'></Icon>
                        <Text style={{ fontSize: 15, color: '#808B96', marginLeft: 5, alignSelf: 'center' }}>Search your requirement here</Text>
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold', paddingLeft: 15, paddingTop: 10 }}>Categories</Text>
                    <View>
                        <FlatList
                            style={{ margin: 10 }}
                            horizontal={true}
                            // keyboardShouldPersistTaps='always'

                            data={listData}
                            // extraData={this.state}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={this.renderItemHorizontally}
                        />

                    </View>

                    <Text style={{ fontWeight: 'bold', paddingLeft: 15, paddingTop: 10 }}>Popular Categories</Text>

                    <FlatList
                        style={{ margin: 10 }}
                        // keyboardShouldPersistTaps='always'
                        horizontal={true}
                        data={listData}
                        // extraData={this.state}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={this.renderItemHorizontally}
                    />





                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        elevation: 5, borderWidth: 1, borderColor: '#ddd', borderRadius: 3,
        margin: 5,
        backgroundColor: '#fff', shadowColor: "#ddd",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 3,
            width: 1
        }
    }
})

