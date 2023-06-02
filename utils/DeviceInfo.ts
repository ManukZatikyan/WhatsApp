import * as Device from 'expo-device';

export async function getDeviceInfo() {
    try {
        const deviceType: number = await Device.getDeviceTypeAsync();
        const brand: string | null = Device.brand;
        const designName: string | null = Device.designName;
        const deviceName: string | null = Device.deviceName;
        const deviceYearClass: number | null = Device.deviceYearClass;
        const manufacturer: string | null =  Device.manufacturer;
        const osBuildFingerprint: string | null = Device.osBuildFingerprint;
        const osName: string | null = Device.osName;
        const osVersion: string | null = Device.osVersion;
        const osBuildId: string | null = Device.osBuildId;
        const osInternalBuildId: string | null = Device.osInternalBuildId;
        const platformApiLevel: number | null = Device.platformApiLevel;
        const productName: string | null = Device.productName;
        const supportedCpuArchitectures: string[] | null = Device.supportedCpuArchitectures;
        const totalMemory: number | null = Device.totalMemory;
        const getMaxMemoryAsync:number= await Device.getMaxMemoryAsync();
        const getPlatformFeaturesAsync: string[]= await Device.getPlatformFeaturesAsync() ;
        const getUptimeAsync: number = await Device.getUptimeAsync();
        const isRootedExperimentalAsync: boolean = await Device.isRootedExperimentalAsync();

        console.log('Device Type:', deviceType);
        console.log('Manufacturer:', brand);
        console.log('Model Name:', designName);
        console.log('Brand:', brand);
        console.log('deviceName:', deviceName);
        console.log('deviceYearClass:', deviceYearClass);
        console.log('manufacturer:', manufacturer);
        console.log('osBuildFingerprint:', osBuildFingerprint);
        console.log('OS Name:', osName);
        console.log('OS Version:', osVersion);
        console.log('osBuildId:', osBuildId);
        console.log('osInternalBuildId:', osInternalBuildId);
        console.log('platformApiLevel:', platformApiLevel);
        console.log('productName:', productName);
        console.log('supportedCpuArchitectures:', supportedCpuArchitectures);
        console.log('totalMemory:', totalMemory);
        console.log('getMaxMemoryAsync:', getMaxMemoryAsync);
        // console.log('getPlatformFeaturesAsync:', getPlatformFeaturesAsync);
        console.log('getUptimeAsync:', getUptimeAsync);
        console.log('isRootedExperimentalAsync:', isRootedExperimentalAsync);
    } catch (error) {
        console.error('Error:', error);
    }
}

