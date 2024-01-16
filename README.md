# OSB_ORACLE_SOA

## Introduction
This project report details the design and implementation of a Request Management System utilizing a Service-Oriented Architecture (SOA) and Business Process Management (BPM) approach. The system is designed to offer an efficient, reliable, and straightforward means for professors to submit requests and monitor their status.

## Problem Statement
The project aims to model and implement mission management processes for teachers/administrators within a Service-Oriented Architecture (SOA) environment. The developed system will enhance control over all stages involved in managing various mission processes. Furthermore, the system will digitize mission management processes, minimizing paper circulation. It will streamline tasks for budget service managers, particularly in calculating travel expense amounts. Key advantages include:

- Efficient management of mission requests and reimbursements.
- Centralized storage of all requests.
- Automatic generation of travel expense statements.
- Comprehensive traceability throughout the mission management process.
- Enhanced visibility through the generation of tracking reports.

## Installation
Clone this repository to install the project:

1. `git clone https://github.com/Ensias-S5-G6/OSB_ORACLE_SOA.git`
2. You will find five folders in the root directory:
    - **GestionMissionApplicationBus**: The application bus.
    - **InsertService**: SOA composite service wrapping the implementation of InsertService in Node.js.
    - **LoadService**: SOA composite service wrapping the implementation of LoadService in Node.js.
    - **UpdateService**: SOA composite service wrapping the implementation of UpdateService in Node.js.
    - **SOA_COMPOSITE_SERVICES**: Node.js implementation of InsertService, LoadService, UpdateService.
3. For the SOA part, import each service using the file tab of JDeveloper.
4. For the Node.js part:
    - Run `npm install .` in the root folder of each service to install dependencies.
    - Run `npm start` to start the development server.

## Setup
Project requirements:

- Oracle SOA Suite 12C
- Node.js ^18.18
- Express.js ^4.18.2
- MySQL Database: 8.0.12

## Contributors

[<img src="https://avatars.githubusercontent.com/u/96293231?v=4" width="50px">](https://github.com/GodWilldev)
[<img src="https://avatars.githubusercontent.com/u/148327695?v=4" width="50px">](https://github.com/dianeDev224)
[<img src="https://avatars.githubusercontent.com/u/125375032?v=4" width="50px">](https://github.com/ChaimaaRO)
[<img src="https://avatars.githubusercontent.com/u/101372554?v=4" width="50px">](https://github.com/houdasam)

## Useful Links

- Oracle SOA Suite Documentation: [Link](https://docs.oracle.com/middleware/1221/soasuite/index.html)
- Red Hat SOA Architecture Overview: [Link](https://www.redhat.com/fr/topics/cloud-native-apps/what-is-service-oriented-architecture)
