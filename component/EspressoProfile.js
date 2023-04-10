// import { View, Text, TouchableOpacity } from 'react-native'
// import { useState, useLayoutEffect } from 'react'
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// const EspressoProfile = ({ navigation }) => {

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerShown: false,
//         });
//     }, []);
//     const insets = useSafeAreaInsets();

//     return (
//         <View style={{
//             paddingTop: insets.top,
//             paddingBottom: insets.bottom,
//             paddingLeft: insets.left,
//             paddingRight: insets.right,
//         }}>
//             <Text>EspressoProfile</Text>
//         </View>
//     )
// }

// export default EspressoProfile

import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useState, useLayoutEffect, useEffect } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { database } from "./Database";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const EspressoProfile = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedDataID, setSelectedDataID] = useState(0);
    const [editData, setEditData] = useState({});
    const changeEditData = (name, value) => {
        setEditData({ ...editData, [name]: value });
    }

    useEffect(() => {
        database.getEspresso(setDataFromDB);
    }, []);

    const setDataFromDB = (data) => {
        // console.log(data);
        setData(data);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const insets = useSafeAreaInsets();

    const [modalVisible, setModalVisible] = useState(false);

    const editModalShow = (index) => {
        setSelectedIndex(index);
        setSelectedDataID(data[index].id);
        setEditData(data[index]);
        setModalVisible(true);
    }

    const saveEditData = () => {
        let temp = [...data];
        temp[selectedIndex] = editData;
        setData(temp);
        database.updateEspresso(selectedDataID, editData);
        setModalVisible(false);
    }

    const deleteData = (index) => {
        database.deleteEspresso(data[index].id);
        let temp = [...data];
        temp.splice(index, 1);
        setData(temp);
    }

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? 'padding' : "height"}>
                    <LinearGradient
                        colors={['rgb(80, 138, 191)', 'rgb(78, 136, 189)', 'rgb(35, 95, 145)']}
                        className="flex-row p-2 align-top h-[80px] pt-10"
                    >
                        <Text className="text-slate-50 text-xl font-semibold pb-0">
                            Bean:
                        </Text>
                        <View>
                            <TextInput
                                className="text-slate-50 text-xl pl-2 font-semibold pt-0"
                                name="bean"
                                multiline
                                onChangeText={newText => changeEditData("bean", newText)}
                                value={editData.bean}
                            />
                        </View>
                    </LinearGradient>
                    <ScrollView>
                        <View className="flex-1 flex-wrap bg-white">
                            <View className="flex-row basis-1/3">
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("grindSetting1", newText)}
                                            value={editData.grindSetting1} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("dose1", newText)}
                                            value={editData.dose1} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield1", newText)}
                                            value={editData.yield1}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("brewTime1", newText)}
                                            value={editData.brewTime1}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("temp1", newText)} 
                                            value={editData.temp1}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes1", newText)}
                                            value={editData.notes1}
                                        />
                                    </View>
                                </View>
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#23282b] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("grindSetting2", newText)}
                                            value={editData.grindSetting2} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("dose2", newText)}
                                            value={editData.dose2} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield2", newText)}
                                            value={editData.yield2} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("brewTime2", newText)}
                                            value={editData.brewTime2}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("temp2", newText)}
                                            value={editData.temp2} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes2", newText)}
                                            value={editData.notes2}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View className="flex-row basis-1/3">
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("grindSetting3", newText)}
                                            value={editData.grindSetting3}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("dose3", newText)}
                                            value={editData.dose3}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield3", newText)}
                                            value={editData.yield3} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("brewTime3", newText)}
                                            value={editData.brewTime3} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%]">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("temp3", newText)}
                                            value={editData.temp3}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes3", newText)}
                                            value={editData.notes3}
                                        />
                                    </View>
                                </View>
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("grindSetting4", newText)}
                                            value={editData.grindSetting4} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("dose4", newText)}
                                            value={editData.dose4}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield4", newText)}
                                            value={editData.yield4}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("brewTime4", newText)} 
                                            value={editData.brewTime4}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("temp4", newText)}
                                            value={editData.temp4} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes4", newText)}
                                            value={editData.notes4}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View className="flex-row basis-1/3">
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("grindSetting5", newText)}
                                            value={editData.grindSetting5} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("dose5", newText)}
                                            value={editData.dose5} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield5", newText)}
                                            value={editData.yield5}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("brewTime5", newText)}
                                            value={editData.brewTime5}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("temp5", newText)}
                                            value={editData.temp5} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes5", newText)}
                                            value={editData.notes5}
                                        />
                                    </View>
                                </View>
                                <View className="w-[50%]">
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("grindSetting6", newText)}
                                            value={editData.grindSetting6}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Dose</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("dose6", newText)}
                                            value={editData.dose6}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Yield</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                            onChangeText={newText => changeEditData("yield6", newText)}
                                            value={editData.yield6} 
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Brew Time</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("brewTime6", newText)}
                                            value={editData.brewTime6}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row w-[100%] border-[#43a6fd] border">
                                        <View className="w-[60%]">
                                            <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Temp</Text>
                                        </View>
                                        <View className="w-[40%] bg-white p-1">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            onChangeText={newText => changeEditData("temp6", newText)}
                                            value={editData.temp6}
                                        />
                                        </View>
                                    </View>
                                    <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                        <TextInput 
                                            className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                            placeholder='Notes:'
                                            multiline
                                            onChangeText={newText => changeEditData("notes6", newText)}
                                            value={editData.notes6}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity className="bg-[#4e94cf] rounded-sm p-3 mt-10"
                        onPress={saveEditData}>
                        <Text className="text-center font-extrabold text-2xl text-slate-50 rounded-md">SAVE ESPRESSO LOG</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ Modal>
            <View className="p-4">
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity className="mt-3 p-4 bg-white w-full flex flex-row items-center" key={index} onPress={() => { editModalShow(index) }}>
                            <View className="flex-auto">
                                <Text className="font-bold text-lg">Name:{item.bean}</Text>
                                <Text>{item.createdDate}</Text>
                            </View>
                            <TouchableOpacity className="mr-5" onPress={() => { editModalShow(index) }}>
                                <SimpleLineIcons name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                deleteData(index);
                            }}>
                                <FontAwesome name="close" size={30} color="red" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

export default EspressoProfile