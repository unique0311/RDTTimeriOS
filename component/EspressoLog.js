import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import { useState, useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from 'react-native-root-toast';
import { database } from './Database';

const EspressoLog = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const insets = useSafeAreaInsets();

    const [formData, setFormData] = useState({
        bean: "",
        grindSetting1: "",
        dose1: "",
        yield1: "",
        brewTime1: "",
        temp1: "",
        notes1: "",
        grindSetting2: "",
        dose2: "",
        yield2: "",
        brewTime2: "",
        temp2: "",
        notes2: "",
        grindSetting3: "",
        dose3: "",
        yield3: "",
        brewTime3: "",
        temp3: "",
        notes3: "",
        grindSetting4: "",
        dose4: "",
        yield4: "",
        brewTime4: "",
        temp4: "",
        notes4: "",
        grindSetting5: "",
        dose5: "",
        yield5: "",
        brewTime5: "",
        temp5: "",
        notes5: "",
        grindSetting6: "",
        dose6: "",
        yield6: "",
        brewTime6: "",
        temp6: "",
        notes6: "",
    });

    const onChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const saveData =async () => {
        try{
            await database.setupEspressoTable();
            database.insertEspresso(formData, saveSuccess);
        }
        catch (error) {
            console.log(error);
        }
        // saveSuccess();
    }

    const saveSuccess = () => {
        Toast.show('Saved costa', {
            position: -80,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
    }

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : "height"}>
                <LinearGradient
                    colors={['rgb(80, 138, 191)', 'rgb(78, 136, 189)', 'rgb(35, 95, 145)']}
                    className="flex-row p-2 align-top h-[80px]"
                >
                    <Text className="text-slate-50 text-xl font-semibold">
                            Bean:
                    </Text>
                    <View className="flex-auto">
                        <TextInput
                            className="text-slate-50 text-xl pt-0 pl-2 font-semibold"
                            name="bean"
                            multiline
                            onChangeText={newText => onChange("bean", newText)}
                            value={formData.bean}
                        />
                    </View>
                </LinearGradient>
                <ScrollView>
                    <View className="flex-1 flex-wrap">
                        <View className="flex-row basis-1/3">
                            <View className="w-[50%]">
                                <View className="flex-row w-[100%] border-[#43a6fd] border">
                                    <View className="w-[60%]">
                                        <Text className=" text-slate-50 text-[15px] font-semibold p-1 w-[100%] bg-[#4e94cf] text-center rounded-[4px]">Grind Setting</Text>
                                    </View>
                                    <View className="w-[40%] bg-white p-1">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1"
                                        onChangeText={newText => onChange("grindSetting1", newText)}
                                        value={formData.grindSetting1}
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
                                        onChangeText={newText => onChange("dose1", newText)}
                                        value={formData.dose1} 
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
                                        onChangeText={newText => onChange("yield1", newText)}
                                        value={formData.yield1} 
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
                                        onChangeText={newText => onChange("brewTime1", newText)}
                                        value={formData.brewTime1}
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
                                        onChangeText={newText => onChange("temp1", newText)}
                                        value={formData.temp1}
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes1", newText)}
                                        multiline
                                        value={formData.notes1}
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
                                        onChangeText={newText => onChange("grindSetting2", newText)}
                                        value={formData.grindSetting2} 
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
                                        onChangeText={newText => onChange("dose2", newText)}
                                        value={formData.dose2} 
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
                                        onChangeText={newText => onChange("yield2", newText)}
                                        value={formData.yield2} 
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
                                        onChangeText={newText => onChange("brewTime2", newText)}
                                        value={formData.brewTime2}
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
                                        onChangeText={newText => onChange("temp2", newText)}
                                        value={formData.temp2} 
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes2", newText)}
                                        multiline
                                        value={formData.notes2}
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
                                        onChangeText={newText => onChange("grindSetting3", newText)}
                                        value={formData.grindSetting3}
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
                                        onChangeText={newText => onChange("dose3", newText)}
                                        value={formData.dose3}
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
                                        onChangeText={newText => onChange("yield3", newText)}
                                        value={formData.yield3} 
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
                                        onChangeText={newText => onChange("brewTime3", newText)}
                                        value={formData.brewTime3} 
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
                                        onChangeText={newText => onChange("temp3", newText)}
                                        value={formData.temp3}
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes3", newText)}
                                        multiline
                                        value={formData.notes3}
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
                                        onChangeText={newText => onChange("grindSetting4", newText)}
                                        value={formData.grindSetting4} 
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
                                        onChangeText={newText => onChange("dose4", newText)}
                                        value={formData.dose4}
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
                                        onChangeText={newText => onChange("yield4", newText)}
                                        value={formData.yield4}
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
                                        onChangeText={newText => onChange("brewTime4", newText)} 
                                        value={formData.brewTime4}
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
                                        onChangeText={newText => onChange("temp4", newText)}
                                        value={formData.temp4} 
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes4", newText)}
                                        multiline
                                        value={formData.notes4}
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
                                        onChangeText={newText => onChange("grindSetting5", newText)}
                                        value={formData.grindSetting5} 
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
                                        onChangeText={newText => onChange("dose5", newText)}
                                        value={formData.dose5} 
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
                                        onChangeText={newText => onChange("yield5", newText)}
                                        value={formData.yield5}
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
                                        onChangeText={newText => onChange("brewTime5", newText)}
                                        value={formData.brewTime5}
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
                                        onChangeText={newText => onChange("temp5", newText)}
                                        value={formData.temp5} 
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes5", newText)}
                                        multiline
                                        value={formData.notes5}
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
                                        onChangeText={newText => onChange("grindSetting6", newText)}
                                        value={formData.grindSetting6}
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
                                        onChangeText={newText => onChange("dose6", newText)}
                                        value={formData.dose6}
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
                                        onChangeText={newText => onChange("yield6", newText)}
                                        value={formData.yield6} 
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
                                        onChangeText={newText => onChange("brewTime6", newText)}
                                        value={formData.brewTime6}
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
                                        onChangeText={newText => onChange("temp6", newText)}
                                        value={formData.temp6}
                                    />
                                    </View>
                                </View>
                                <View className="flex-row align-top h-[50px] w-[100%] border-[#43a6fd] border bg-white">
                                    <TextInput 
                                        className="bg-white text-[15px] w-[100%] font-semibold pl-1" 
                                        placeholder='Notes:'
                                        onChangeText={newText => onChange("notes6", newText)}
                                        multiline
                                        value={formData.notes6}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity className="bg-[#4e94cf] rounded-sm p-3 mt-10"
                    onPress={saveData}>
                    <Text className="text-center font-extrabold text-2xl text-slate-50 rounded-md">SAVE ESPRESSO LOG</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default EspressoLog