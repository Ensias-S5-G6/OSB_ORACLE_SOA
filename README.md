# OSB_ORACLE_SOA

## Introduction
This project report outlines the design and implementation of a request management system
that utilizes a Service-Oriented Architecture (SOA) and Business Process Management (BPM)
approach. The system aims to provide a efficient, reliable and simple way for Professors to
submit requests and monitor their status.

## Problematic
The project aims to model and implement the mission management processes for teachers/administrators in a Service-Oriented Architecture (SOA) environment. The system to be developed will provide better control over all stages of managing various processes involved in mission management. Additionally, this system will digitize the processes involved in mission management by minimizing paper circulation as much as possible. It will also relieve the budget service managers of tedious and repetitive tasks related to calculating the status of amounts due for travel expenses. The system will offer several advantages, including:

- Management of mission requests and reimbursements.  
- Storage of all requests.
- Automatic generation of statements for amounts due for travel expenses.
- Traceability throughout the mission management process.
- Visibility of processes by enabling the generation of tracking reports.


## Installation
Clone this repository to install the project:

1.`git clone https://github.com/Ensias-S5-G6/OSB_ORACLE_SOA.git`
2.you will see 5 folders in the root folder
- GestionMissionApplicationBus : the application bus
- InsertService : the SOA composite service that wrappe the implementation of InsertService in node js
- LoadService :  the SOA composite service that wrappe the implementation of LoadService in node js
- UpdateService : the SOA composite service that wrappe the implementation of UpdateService in node js
- SOA_COMPOSITE_SERVICES : the node js  implementation of InsertService , LoadService , UpdateService that

## Setupe
the requirement of the project is  : 
- Oracle SOA Suit 12C
- node js ^18.18
- express js  ^4.18.2
- mysql db : 8.0.12

## Contributors

[<img src="https://avatars.githubusercontent.com/u/96293231?v=4" width="50px">](https://github.com/GodWilldev)
[<img src="https://avatars.githubusercontent.com/u/148327695?v=4" width="50px">](https://github.com/dianeDev224)
[<img src="https://avatars.githubusercontent.com/u/125375032?v=4" width="50px">](https://github.com/ChaimaaRO)
[<img src="https://avatars.githubusercontent.com/u/101372554?v=4" width="50px">](https://github.com/houdasam)

## Usefull links
-oracle soa suit  doc : `https://docs.oracle.com/middleware/1221/soasuite/index.html`
-redhat soa architecture overview :  `https://www.redhat.com/fr/topics/cloud-native-apps/what-is-service-oriented-architecture`




