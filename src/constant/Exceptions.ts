export enum Exceptions {
	appPathInterpolation = 'Failing path: ":path"',
	constructorArgs = 'Wrong constructor arguments! | Should be <object> implementing IAppSettings interface',
	appPathExist = 'The value you provided in the parameter: appPath does not lead to a valid folder path',
	configPath = 'Config folder on appPath/../config does not exist.',

	expAppBadViewsFolder = 'The value you provided in the parameter: viewsFolder does not lead to a valid folder path',
	invalidAppSetting = 'App settings must fulfill IAppConfig Interface',
	invalidAppPath = 'The value you provided in the parameter: appPath does not lead to a valid folder path',
	invalidAppRoutesPath = 'The value you provided in the parameter: routersFolder does not lead to a valid folder path',
	invalidAppRouterExport = 'Skipped router :router since it does not have a default exported @ExpressRouter or @RestHandler or native express router',
	invalidJSONFile = 'Unable to find JSON file',
	invalidConfigPath = 'Unable to find config, folder on appPath',
	invalidConfigFile = 'Unable to find config [NODE_ENV].json, file on ../config',
	invalidKeysFile = 'Unable to find config keys.json, file on ../config',
	instanceRunning = 'ApplicationCore instance already exists, please destruct before constructing again.',
	noInstanceNoSettings = 'There is no instance, and it is not possible to create a new one due to the lack of creation settings.',
	expAppBadPublicFolder = 'The value you provided in the parameter: publicFolder does not lead to a valid folder path',
	expAppBadFaviconFile = 'The value you provided in the parameter: faviconPath does not lead to a valid file path',
	srvEAccess = ':bind requires elevated privileges.',
	srvEAddrInUse = ':bind is already in use.',
	successRestDtoInvalidResType = 'function:successRestDto | message: Invalid argument provided | resType: ":resType" | allowed values: ["GET", "PUT", "DELETE", "POST", "Http204", "204", "NO_CONTENT"]',
	mapReqToObjNoProp = 'The key: ":key" is not part of the Request object',
}
