import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "aa38ff0eeb30456e8bea34b4b2866582"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "e4c93689e9934c4cbb6d467a250617ed"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "bdd478eb078a45a68928b21d531f8328"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "548fcb7fc3d14fed8a178e83eb8a6b83"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "ca9053a2d7ae438991407fef5d62d2b9",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "157ea46682df447fb56604e7b443d0cd",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "3814b66617f441cbac1087aaba908f26",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
