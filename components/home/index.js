




// //data card
// let article1 = {
//     id: "random-id",
//     title: " Serverless Architecture",
//     category: "daily trends",
//     primaryImageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMGVuZCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Serverless technologies such as AWS Lambda, Azure Functions, and Google Cloud Functions have surged in popularity, reshaping the landscape of backend development. Articles exploring this trend delve into how these platforms offer a more scalable and cost-effective approach to building and deploying applications.",
//     "Traditional server-based architectures often require extensive provisioning, management, and maintenance of infrastructure. However, with serverless technologies, developers can focus solely on writing code without worrying about managing servers",
//     "Articles discuss how serverless architectures enable automatic scaling, allowing applications to handle varying levels of traffic without manual intervention. This elasticity is particularly beneficial for applications with unpredictable workloads",
//     "Moreover, serverless platforms offer a pay-per-execution pricing model, where developers only pay for the resources consumed during the execution of their functions. This can result in significant cost savings compared to traditional server-based deployments.",
//     "Developers are intrigued by the event-driven nature of serverless computing, where functions are triggered in response to events such as HTTP requests, database changes, or file uploads. This paradigm shift encourages the development of modular and loosely coupled systems.",
//     "One significant impact of serverless technologies on traditional architectures is the decentralization of infrastructure. Articles explore how functions are deployed independently, promoting a microservices-oriented approach to application development.",
//     "Despite the benefits, challenges such as vendor lock-in, cold start latency, and limited execution environments are also discussed in these articles. Developers are advised to carefully evaluate these factors when adopting serverless technologies for their projects.",
//     "Articles highlight the role of serverless in enabling rapid prototyping and experimentation, allowing developers to quickly test ideas and iterate on them without upfront infrastructure investment.",
//     "Furthermore, serverless architectures facilitate the integration of third-party services and APIs, enabling developers to leverage a rich ecosystem of pre-built components for common functionalities such as authentication, database access, and image processing.",
//     "As serverless adoption continues to grow, articles discuss the evolving best practices and design patterns for building robust, resilient, and maintainable applications on these platforms.",
//     "Overall, articles exploring the adoption of serverless technologies emphasize their transformative impact on backend development, paving the way for more agile, cost-efficient, and scalable applications in the cloud-native era.",
// ],
// };
// let article2 = {
//     id: "random-id",
//     title: "Microservices",
//     category: "daily trends",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Microservices Architectures: One of the hottest trends in backend development revolves around microservices architectures. Articles delve into the design principles and benefits of breaking down monolithic applications into smaller, independently deployable services.",
//     "Implementation Strategies: Developers are exploring various implementation strategies for microservices, such as domain-driven design (DDD) and event sourcing, to ensure scalability, maintainability, and resilience.",
//     "Containerization with Docker: Docker continues to be a central technology in microservices development, offering lightweight, portable containers for packaging and deploying individual microservices. Articles explore best practices for Dockerizing microservices and orchestrating them efficiently.",
//     "Orchestration with Kubernetes: Kubernetes remains the de facto standard for orchestrating containerized microservices at scale. Articles discuss Kubernetes' role in automating deployment, scaling, and management tasks, empowering developers to focus on building and iterating on microservices.",
//     "Service Mesh Solutions: Service mesh solutions like Istio and Linkerd are gaining traction for managing the communication between microservices. Articles explore how service meshes enhance observability, security, and resilience in microservices architectures.",
//     "Challenges and Trade-offs: Despite the benefits, implementing microservices architectures comes with challenges such as increased complexity, distributed system debugging, and data consistency. Articles provide insights into mitigating these challenges and making informed trade-offs.",
//     "Adoption in Enterprises: Enterprises are increasingly adopting microservices architectures to accelerate innovation and respond swiftly to changing market demands. Articles examine real-world use cases and success stories of microservices adoption in large organizations.",
//     "Tooling and Ecosystem: The microservices ecosystem is evolving rapidly, with new tools and frameworks emerging to address specific challenges in development, testing, monitoring, and deployment. Articles highlight key players in the microservices tooling landscape and their roles.",
//     "Hybrid Cloud and Multi-Cloud Strategies: With the rise of hybrid cloud and multi-cloud environments, articles discuss how microservices architectures enable organizations to leverage the benefits of different cloud providers while avoiding vendor lock-in.",
//     "Observability and Monitoring: Observability is crucial in microservices architectures to gain insights into the health, performance, and behavior of distributed systems. Articles explore techniques and tools for monitoring microservices and diagnosing issues in production environments.",
//     "Future Trends and Innovations: Looking ahead, articles speculate on future trends and innovations in microservices architectures, such as serverless microservices, edge computing, and AI-driven automation, and their implications for backend development practices",
// ],
// };
// let article3 = {
//     id: "random-id",
//     title: "GraphQL",
//     category: "daily trends",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "GraphQL has emerged as a revolutionary technology in API development, offering a more efficient and flexible approach to data fetching than traditional REST APIs. By allowing clients to specify exactly what data they need in a single query, GraphQL reduces over-fetching and under-fetching, leading to faster and more optimized data retrieval.",
//     "One of the key ways GraphQL is changing the API landscape is by empowering front-end developers with greater control over the data they receive. Instead of relying on predefined endpoints with fixed data structures, front-end developers can craft GraphQL queries tailored to their specific requirements, enabling them to build more responsive and customizable user interfaces.",
//     "With GraphQL, front-end developers no longer have to make multiple requests to different endpoints to fetch related data. Instead, they can use GraphQL's powerful querying capabilities to fetch all the required data in a single request, reducing latency and simplifying the development process.",
//     "Moreover, GraphQL's introspection feature allows front-end developers to explore and understand the available data schema dynamically. This self-documenting nature of GraphQL APIs makes it easier for developers to discover and work with the underlying data, leading to faster development cycles and fewer errors.",
//     "Another advantage of GraphQL is its ability to support real-time data updates through subscriptions. By establishing persistent connections between clients and servers, GraphQL subscriptions enable front-end developers to receive instant notifications about changes to the data, facilitating the development of interactive and collaborative applications.",
//     "Additionally, GraphQL's type system provides a clear and structured way to define the shape of data and its relationships, making it easier for front-end developers to reason about and manipulate the data in their applications.",
//     "GraphQL's flexibility extends to its support for batched queries and mutations, allowing front-end developers to combine multiple operations into a single request and execute them atomically on the server side. This reduces network overhead and improves overall performance, especially in scenarios involving complex data fetching and updates.",
//     "Furthermore, GraphQL's ecosystem is rapidly expanding, with a growing number of tools and libraries that simplify the development and integration of GraphQL APIs into front-end applications. From client-side frameworks like Apollo Client to server-side solutions like Apollo Server and GraphQL Yoga, developers have access to a rich set of resources to leverage GraphQL effectively.",
//     "As more companies adopt GraphQL for their API development needs, front-end developers with expertise in GraphQL are in high demand. By mastering GraphQL and its associated tools, front-end developers can enhance their skill set and stay ahead in the competitive job market.",
//     "Overall, GraphQL's impact on API development cannot be overstated. Its ability to streamline data fetching, empower front-end developers, and foster collaboration between client and server teams is reshaping the way modern applications are built and consumed.",
//     "As the GraphQL ecosystem continues to evolve and mature, it's clear that this technology will play a central role in the future of web development, enabling developers to create richer, more responsive, and more maintainable applications than ever before.",
// ],
// };
// let article4 = {
//     id: "random-id",
//     title: "Event-Driven Architecture",
//     category: "daily trends",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Event-driven design patterns, such as event sourcing and CQRS (Command Query Responsibility Segregation), have emerged as powerful paradigms in building modern backend systems. These approaches promote scalability and resilience by decoupling components and enabling asynchronous communication.",
//     "Event sourcing revolves around the idea of capturing all changes to an application's state as a sequence of immutable events. These events represent a factual history of the system's evolution, allowing for precise reconstruction of state at any point in time.",
//     "CQRS complements event sourcing by separating the responsibility of handling commands (write operations) from queries (read operations). This segregation allows for optimizing each aspect independently, leading to improved performance and flexibility.",
//     "When combined, event sourcing and CQRS enable a reactive and scalable architecture where changes are propagated asynchronously through a system via events. This approach fosters loose coupling between components, making it easier to evolve and maintain complex systems.",
//     "One of the key benefits of event-driven architectures is their ability to handle high loads and bursts of traffic without sacrificing performance. By distributing processing tasks across multiple nodes and leveraging event-driven communication, systems can dynamically scale to meet demand.",
//     "Event-driven systems are also inherently resilient to failures. Since events represent immutable facts, they can be replayed to recover lost state in the event of failures or errors, ensuring data integrity and consistency.",
//     "Moreover, event-driven architectures lend themselves well to real-time processing and analytics. By reacting to events as they occur, systems can provide timely insights and reactions to changing conditions, enhancing decision-making and user experiences.",
//     "Organizations across various industries are increasingly adopting event-driven design patterns to build agile and responsive backend systems. From e-commerce platforms to financial services, event sourcing and CQRS are becoming fundamental building blocks for scalable and resilient architectures.",
//     "Developers are leveraging tools and frameworks like Apache Kafka, Apache Flink, and event-driven messaging systems to implement event-driven architectures effectively. These technologies provide robust event streaming capabilities and support for complex event processing workflows.",
//     "As the demand for real-time data processing and reactive systems continues to grow, event-driven architectures are poised to become even more prevalent. Their ability to handle complex workflows, ensure data consistency, and adapt to changing requirements makes them a compelling choice for building next-generation backend systems.",
//     "To stay ahead in the ever-evolving landscape of backend development, developers and organizations must embrace event-driven design patterns and architectures. By leveraging the principles of event sourcing and CQRS, they can build scalable, resilient, and future-proof systems capable of meeting the demands of modern applications and users.",
// ],
// };
// let article5 = {
//     id: "random-id",
//     title: "Containerization",
//     category: "daily trends",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to Containerization: Containerization technologies like Docker have revolutionized backend development by offering lightweight, portable environments for deploying applications.",
//     "Efficiency in Deployment: Docker enables developers to package their applications and dependencies into standardized containers, simplifying deployment across different environments and reducing the risk of configuration errors.",
//     "Streamlining Deployment Workflows: With Docker's containerization, deployment workflows become more streamlined and consistent, as developers can create, deploy, and manage containers using tools like Docker Compose and Kubernetes.",
//     "Scalability: Docker's container orchestration capabilities, such as Kubernetes, allow for automatic scaling of backend applications based on demand, ensuring optimal resource utilization and improved performance.",
//     "Portability Across Environments: Docker containers are highly portable, allowing developers to run their applications seamlessly across different operating systems and cloud providers, enhancing flexibility and reducing vendor lock-in.",
//     "DevOps Integration: Docker facilitates the integration of DevOps practices by enabling continuous integration and continuous deployment (CI/CD) pipelines, automating the build, test, and deployment processes for backend applications.",
//     "Resource Efficiency: Compared to traditional virtual machines, Docker containers are more lightweight and efficient, consuming fewer resources while still providing isolation and security for backend services.",
//     "Microservices Architecture: Docker plays a crucial role in implementing microservices architectures, allowing developers to decompose monolithic applications into smaller, manageable services that can be independently deployed and scaled.",
//     "Container Security: While Docker containers offer inherent security benefits, such as isolation, it's essential for developers to implement best practices for securing containerized applications, including regular updates and vulnerability scanning.",
//     "Hybrid Cloud Deployments: Docker's portability makes it an ideal choice for hybrid cloud deployments, where applications span across on-premises data centers and public cloud environments, providing consistency and flexibility in deployment.",
//     "Future Trends: As containerization technologies continue to evolve, we can expect further advancements in areas like performance optimization, networking, and management tools, further enhancing the capabilities of Docker and its ecosystem.",
// ],
// };
// let article6 = {
//     id: "random-id",
//     title: "Security",
//     category: "daily trends",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "API Security: With the rising adoption of APIs in modern software development, ensuring API security has become paramount. Developers are exploring techniques such as OAuth 2.0 and JWT (JSON Web Tokens) for secure authentication and authorization, while also implementing measures like rate limiting and input validation to mitigate common vulnerabilities such as injection attacks.",
//     "Authentication Mechanisms: Traditional username-password authentication is being complemented or replaced by more secure methods such as multi-factor authentication (MFA) and biometric authentication. Articles often delve into the implementation of these mechanisms and their effectiveness in preventing unauthorized access to backend systems.",
//     "Authorization Mechanisms: Role-based access control (RBAC) and attribute-based access control (ABAC) are widely used authorization models, but newer approaches like policy-based access control (PBAC) are gaining traction for their flexibility in defining access policies based on various attributes and conditions.",
//     "Data Encryption: Encryption is crucial for protecting sensitive data both in transit and at rest. Articles discuss the use of encryption algorithms like AES (Advanced Encryption Standard) and TLS (Transport Layer Security) for securing data in backend systems, along with key management best practices to prevent unauthorized access to encryption keys.",
//     "Compliance Standards: Regulatory standards such as GDPR (General Data Protection Regulation) and HIPAA (Health Insurance Portability and Accountability Act) impose strict requirements on the handling of personal and sensitive data. Articles cover strategies for achieving compliance with these standards, including data anonymization, access controls, and audit logging.",
//     "Threat Intelligence: Stay updated on emerging threats and attack vectors targeting backend systems, such as DDoS (Distributed Denial of Service) attacks, SQL injection, and cross-site scripting (XSS). Articles often provide insights into threat intelligence platforms and practices for proactive threat detection and response.",
//     "Security Testing: Adopting a proactive approach to security testing is essential for identifying and remedying vulnerabilities in backend systems before they can be exploited by malicious actors. Articles discuss techniques such as penetration testing, code review, and automated vulnerability scanning to bolster the security posture of backend applications.",
//     "Container Security: With the widespread adoption of containerization technologies like Docker and Kubernetes, securing containerized environments has become a priority. Articles explore container security best practices such as image scanning, least privilege principles, and network segmentation to prevent container escapes and unauthorized access to sensitive data.",
//     "Cloud Security: As more organizations migrate their backend infrastructure to the cloud, understanding cloud security principles and practices is crucial. Articles cover topics like shared responsibility models, identity and access management (IAM), and data encryption in cloud environments to ensure the security of backend workloads and data stored in the cloud.",
//     "Zero Trust Architecture: Traditional perimeter-based security models are giving way to zero trust architecture, which assumes that threats may exist both outside and inside the network. Articles discuss the principles of zero trust, such as least privilege access and continuous authentication, and how they can be applied to backend systems to minimize the risk of data breaches and insider threats.",
//     "Security Compliance Automation: With the increasing complexity of regulatory requirements and the need for continuous compliance monitoring, articles explore the role of automation in streamlining security compliance processes. Topics include compliance as code, continuous compliance monitoring, and integration with DevSecOps practices to embed security into the software development lifecycle.",
// ],
// };
// let article7 = {
//     id: "random-id",
//     title: "A Comprehensive Guide to Node.js Development Tools",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to Node.js: Node.js has gained immense popularity in the world of back-end development due to its non-blocking I/O model and event-driven architecture. Understanding its ecosystem of tools is essential for efficient development.",
//     "npm: Node Package Manager (npm) is a central repository for Node.js packages, making it easy for developers to discover, share, and reuse code. It's not only a package manager but also a powerful tool for managing project dependencies and scripts.",
//     "Express.js: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating APIs and handling HTTP requests, making it a popular choice for building back-end services.",
//     "Debugging Tools: Node.js offers various debugging tools like Node Inspector, ndb, and Visual Studio Code's debugger. These tools help developers identify and fix bugs in their code by providing insights into runtime behavior, variable values, and stack traces.",
//     "Profiling Tools: Profiling tools like Clinic.js and Node.js built-in profiler enable developers to analyze the performance of their Node.js applications. They identify CPU and memory bottlenecks, helping optimize code for better scalability and efficiency.",
//     "Security Tools: Security is paramount in web development. Tools like npm audit, Helmet.js, and Node Security Platform help identify and mitigate security vulnerabilities in Node.js applications, ensuring robust protection against common threats.",
//     "Testing Tools: Testing is crucial for maintaining the quality and reliability of Node.js applications. Frameworks like Mocha, Chai, and Jest provide comprehensive testing capabilities, including unit testing, integration testing, and mocking.",
//     "Automation Tools: Automating repetitive tasks streamlines the development process. Tools like Grunt, Gulp, and npm scripts automate tasks like code compilation, minification, testing, and deployment, improving developer productivity and project consistency.",
//     "Containerization Tools: Docker and Kubernetes have become indispensable tools for containerizing and orchestrating Node.js applications. They provide a consistent environment across development, testing, and production, simplifying deployment and scalability.",
//     "Monitoring Tools: Monitoring tools like Prometheus, Grafana, and New Relic help track the performance and health of Node.js applications in real-time. They collect metrics, visualize data, and alert developers about potential issues, ensuring optimal application uptime and performance.",
//     "Continuous Integration/Continuous Deployment (CI/CD) Tools: CI/CD pipelines automate the process of building, testing, and deploying Node.js applications. Tools like Jenkins, Travis CI, and GitHub Actions enable seamless integration with version control systems, facilitating rapid and reliable delivery of software updates.",
// ],
// };
// let article8 = {
//     id: "random-id",
//     title: "Effective Debugging Techniques for Python Developers",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to Python Debugging: Debugging is an essential skill for Python developers to identify and resolve issues in their code. Understanding effective debugging techniques can significantly improve development efficiency and code quality.",
//     "Using print Statements: One of the simplest yet effective debugging techniques in Python is using print statements to output variable values, function outputs, or control flow information. It provides developers with immediate insights into the state of their code during runtime.",
//     "Debugger Module (pdb): Python's built-in debugger module, pdb, allows developers to set breakpoints, inspect variables, and step through code execution interactively. It provides a powerful command-line interface for debugging complex issues.",
//     "Integrated Development Environments (IDEs): IDEs like PyCharm, Visual Studio Code, and Spyder offer advanced debugging features such as breakpoints, variable inspection, and stack trace visualization, enhancing the debugging experience for Python developers.",
//     "Logging: Logging is a valuable debugging technique for capturing runtime information and errors in Python applications. The built-in logging module allows developers to record messages with different severity levels, facilitating troubleshooting and monitoring.",
//     "Exception Handling: Proper exception handling using try-except blocks helps Python developers anticipate and handle runtime errors gracefully. By catching exceptions and logging relevant information, developers can pinpoint and address issues more effectively.",
//     "Unit Testing: Writing unit tests using frameworks like unittest or pytest enables Python developers to systematically validate individual components of their code. Unit tests serve as a proactive debugging technique by identifying bugs early in the development process.",
//     "Debugging Tools in IDEs: IDEs offer specialized debugging tools such as watchlists, variable inspection, and expression evaluation, enhancing the debugging workflow for Python developers. These features provide real-time insights into code execution and variable states.",
//     "Remote Debugging: Remote debugging allows Python developers to debug code running on remote servers or devices. Tools like pdb-clone and PyCharm's remote debugging feature enable developers to connect to remote Python processes and debug them from their local environment.",
//     "Profiling: Profiling tools like cProfile and line_profiler help Python developers identify performance bottlenecks and optimize their code. By analyzing the runtime behavior of functions and code segments, developers can improve the efficiency of their Python applications.",
//     "Debugging Tips and Best Practices: Adopting best practices such as writing modular and testable code, documenting code changes, and collaborating with team members can streamline the debugging process for Python developers. Additionally, leveraging version control systems like Git enables developers to track changes and revert to previous states if needed, further facilitating debugging and code maintenance.",
// ],
// };
// let article9 = {
//     id: "random-id",
//     title: "Introduction to Docker and its Application in Back-end Development",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Understanding Docker: Docker is a platform that simplifies the process of building, deploying, and managing applications using containerization technology. Containers encapsulate applications and their dependencies, enabling consistent and portable deployment across different environments.",
//     "Containerization Concept: Containerization allows developers to package an application along with its dependencies, libraries, and configuration files into a lightweight, isolated container. These containers run consistently across various operating systems and cloud platforms, ensuring reproducible and scalable deployments.",
//     "Advantages of Docker: Docker offers several benefits for back-end development, including improved development productivity, environment consistency between development and production, efficient resource utilization, and simplified deployment and scaling.",
//     "Docker Engine: The Docker Engine is the core component of the Docker platform responsible for creating and managing containers. It includes a daemon process, REST API, and command-line interface (CLI) for interacting with containers and Docker objects",
//     "Docker Images: Docker images are read-only templates used to create containers. They contain everything needed to run an application, including the code, runtime, libraries, and dependencies. Images are built using Dockerfiles, which define the steps to create the image.",
//     "Container Lifecycle: Containers created from Docker images go through various lifecycle stages, including creation, start, stop, pause, and deletion. Docker provides commands and APIs to manage the lifecycle of containers efficiently.",
//     "Docker Compose: Docker Compose is a tool for defining and managing multi-container Docker applications. It uses a YAML file to specify the services, networks, and volumes required for an application, simplifying the orchestration of complex deployments.",
//     "Application Deployment: Docker facilitates the deployment of back-end applications by encapsulating them into containers. Developers can build, test, and deploy applications consistently across different environments, reducing the risk of environment-related issues.",
//     "Microservices Architecture: Docker is well-suited for implementing microservices architecture, where applications are divided into smaller, independent services running in separate containers. This approach enhances scalability, flexibility, and fault isolation in back-end development.",
//     "Integration with Orchestration Tools: Docker integrates seamlessly with orchestration tools like Kubernetes, Docker Swarm, and Amazon ECS for managing containerized applications at scale. These tools provide features for service discovery, load balancing, auto-scaling, and rolling updates.",
//     "DevOps Practices: Docker plays a crucial role in DevOps practices by enabling continuous integration, continuous delivery (CI/CD), and infrastructure as code (IaC). It streamlines the development workflow, improves collaboration between development and operations teams, and accelerates the delivery of software updates.P",
// ],
// };
// let article10 = {
//     id: "random-id",
//     title: "Optimizing Back-end Performance with Profiling Tools",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Understanding Back-end Performance: Back-end performance optimization is critical for ensuring the responsiveness, scalability, and efficiency of web applications. Profiling tools play a vital role in identifying bottlenecks and optimizing the performance of back-end code.",
//     "Introduction to Profiling: Profiling is the process of analyzing the runtime behavior of an application to identify performance issues such as CPU bottlenecks, memory leaks, and slow database queries. Profiling tools collect data about the execution time and resource usage of different code segments.",
//     "Profiling Techniques: Profiling tools use various techniques such as sampling, instrumentation, and tracing to gather data about the execution flow, function calls, and resource utilization during application runtime.",
//     "CPU Profiling: CPU profiling tools like cProfile, Py-Spy, and Scalene analyze the CPU usage of Python applications, identifying functions or code segments that consume the most CPU time. This information helps developers optimize CPU-intensive tasks and improve overall performance.",
//     "Memory Profiling: Memory profiling tools such as memory_profiler and objgraph help identify memory leaks, inefficient memory usage, and objects with high memory consumption in Python applications. By analyzing memory allocation and deallocation patterns, developers can optimize memory usage and reduce memory overhead.",
//     "Database Profiling: Database profiling tools like Django Debug Toolbar, SQLAlchemy-Profiling, and ORMProfiler provide insights into database query performance, including query execution time, database response time, and query optimization opportunities.",
//     "Web Server Profiling: Profiling tools for web servers such as Apache JMeter, wrk, and Locust analyze the performance of web applications under different load conditions. They simulate user traffic, measure response times, and identify performance bottlenecks in the back-end infrastructure.",
//     "Profiling in Production: Profiling tools designed for production environments like New Relic, Datadog, and AppDynamics monitor application performance in real-time, providing insights into production workloads, resource utilization, and performance anomalies.",
//     "Code Optimization: Based on the insights gathered from profiling tools, developers can optimize back-end code by refactoring, caching, asynchronous processing, and adopting efficient algorithms and data structures to improve performance.",
//     "Continuous Profiling: Continuous profiling tools like pyroscope and Go's pprof enable developers to monitor application performance continuously, identifying performance regressions and anomalies over time. This proactive approach helps maintain optimal back-end performance in dynamic environments.",
//     "Conclusion: Profiling tools are invaluable assets for optimizing back-end performance, enabling developers to identify and address performance bottlenecks effectively. By leveraging profiling techniques and tools, developers can enhance the scalability, reliability, and responsiveness of back-end applications, providing better user experiences and maximizing resource utilization.",
// ],
// };
// let article11 = {
//     id: "random-id",
//     title: "Exploring GraphQL for Back-end Development",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to GraphQL: GraphQL is a query language for APIs that enables clients to request only the data they need, making it an efficient alternative to traditional RESTful APIs for back-end development.",
//     "Core Concepts: GraphQL is built around three core concepts: queries, mutations, and subscriptions. Queries retrieve data from the server, mutations modify data on the server, and subscriptions enable real-time data updates.",
//     "Schema Definition: GraphQL APIs are defined by a schema that describes the types of data available, along with the queries, mutations, and subscriptions that clients can execute. The schema serves as a contract between the client and server.",
//     "Single Endpoint: Unlike REST APIs, which often have multiple endpoints for different resources, GraphQL APIs have a single endpoint for all data operations. This simplifies client-server communication and reduces overfetching and underfetching of data.",
//     "Type System: GraphQL's type system allows developers to define custom data types and relationships between them. This enables precise data modeling and ensures type safety throughout the development process.",
//     "GraphiQL: GraphiQL is an interactive graphical interface for exploring and testing GraphQL APIs. It provides an intuitive way to write and execute queries, view documentation, and explore the schema's capabilities.",
//     "Apollo Server: Apollo Server is a popular GraphQL server implementation for Node.js that simplifies the process of building and deploying GraphQL APIs. It offers features like schema stitching, caching, and error handling out of the box.",
//     "Prisma: Prisma is a modern database toolkit for TypeScript and Node.js that simplifies database access and schema management in GraphQL APIs. It provides an intuitive query builder, automatic schema migrations, and a powerful data layer abstraction.",
//     "Client-Side Integration: GraphQL's flexible nature makes it well-suited for client-side integration in web and mobile applications. Front-end frameworks like React, Angular, and Vue.js have robust tooling and libraries for consuming GraphQL APIs.",
//     "Performance and Efficiency: GraphQL's ability to fetch only the required data reduces overfetching and underfetching, leading to more efficient data transfer between clients and servers. Additionally, GraphQL APIs can aggregate data from multiple sources in a single request, improving performance.",
//     "Ecosystem and Community: GraphQL has a vibrant ecosystem and a supportive community of developers contributing libraries, tools, and best practices. This ecosystem continues to grow, with new tools and improvements constantly being developed to enhance the GraphQL developer experience.",
// ],
// };
// let article12 = {
//     id: "random-id",
//     title: "Automating Back-end Testing with Postman and Newman",
//     category: "development tools",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to GraphQL: GraphQL is a query language for APIs that enables clients to request only the data they need, making it an efficient alternative to traditional RESTful APIs for back-end development.",
//     "Core Concepts: GraphQL is built around three core concepts: queries, mutations, and subscriptions. Queries retrieve data from the server, mutations modify data on the server, and subscriptions enable real-time data updates.",
//     "Schema Definition: GraphQL APIs are defined by a schema that describes the types of data available, along with the queries, mutations, and subscriptions that clients can execute. The schema serves as a contract between the client and server.",
//     "Single Endpoint: Unlike REST APIs, which often have multiple endpoints for different resources, GraphQL APIs have a single endpoint for all data operations. This simplifies client-server communication and reduces overfetching and underfetching of data.",
//     "Type System: GraphQL's type system allows developers to define custom data types and relationships between them. This enables precise data modeling and ensures type safety throughout the development process.",
//     "GraphiQL: GraphiQL is an interactive graphical interface for exploring and testing GraphQL APIs. It provides an intuitive way to write and execute queries, view documentation, and explore the schema's capabilities.",
//     "Apollo Server: Apollo Server is a popular GraphQL server implementation for Node.js that simplifies the process of building and deploying GraphQL APIs. It offers features like schema stitching, caching, and error handling out of the box.",
//     "Prisma: Prisma is a modern database toolkit for TypeScript and Node.js that simplifies database access and schema management in GraphQL APIs. It provides an intuitive query builder, automatic schema migrations, and a powerful data layer abstraction.",
//     "Client-Side Integration: GraphQL's flexible nature makes it well-suited for client-side integration in web and mobile applications. Front-end frameworks like React, Angular, and Vue.js have robust tooling and libraries for consuming GraphQL APIs.",
//     "Performance and Efficiency: GraphQL's ability to fetch only the required data reduces overfetching and underfetching, leading to more efficient data transfer between clients and servers. Additionally, GraphQL APIs can aggregate data from multiple sources in a single request, improving performance.",
//     "Ecosystem and Community: GraphQL has a vibrant ecosystem and a supportive community of developers contributing libraries, tools, and best practices. This ecosystem continues to grow, with new tools and improvements constantly being developed to enhance the GraphQL developer experience.",
// ],
// };
// let article13 = {
//     id: "random-id",
//     title: "Getting Started with Node.js and Express.js",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It utilizes the V8 JavaScript engine, the same engine that powers Google Chrome, to execute code on the server-side.",
//     "Installing Node.js:Installing Node.js is straightforward. Simply download the installer from the official Node js website and follow the installation instructions for your operating system. Once installed. you can check the version of Node js and npm (Node Package Manager) by running node -v and npm -v in your terminal.",
//     "Creating a Node.js Project:To start a new Node.js project, create a new directory for your project and navigate to it in your terminal. Then, initialize a new Node.js project by running npm init and following the prompts to set up your project's package.json file.",
//     "Installing Express.js:Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web servers and APIs. You can install Express.js as a dependency for your project by running npm install express.",
//     "Setting up a Basic Express Server:After installing Express.js, you can create a basic server by requiring the Express module and calling the express() function to create an instance of an Express application. You can then define routes to handle different HTTP requests using methods like app.get(), app.post(), etc.",
//     "Creating Routes:Routes in Express.js define how your application responds to client requests. You can define routes for different HTTP methods (GET, POST, PUT, DELETE) and URL paths. Each route can have one or more handler functions to process the request and send back a response.",
//     "Middleware in Express.js:Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform tasks such as parsing request bodies, logging requests, and handling errors.",
//     "Handling Requests and Responses:In Express.js, you can use the req object to access information about the incoming request, such as request parameters, query parameters, and request headers. Similarly, you use the res object to send back a response to the client, including setting response headers and sending a response body.",
//     "Using Middleware in Express.js:Express.js allows you to use middleware to customize the behavior of your application's request-response cycle. You can use built-in middleware provided by Express.js, such as express.json() for parsing JSON bodies, or you can write custom middleware functions to perform specific tasks.",
//     "Connecting to a Database:Express.js is often used in conjunction with databases to build dynamic web applications. You can use various Node.js database drivers or ORMs (Object-Relational Mappers) to connect to databases like MongoDB, MySQL, or PostgreSQL and perform CRUD operations (Create, Read, Update, Delete) from your Express.js application.",
//     "Running Your Express Server:Once you've defined your routes, middleware, and database connections, you can start your Express server by calling the listen() method on your Express application instance, specifying the port number to listen on. You can then access your Express application by navigating to http://localhost:<port> in your web browser.",
// ],
// };
// let article14 = {
//     id: "random-id",
//     title: "Creating RESTful APIs with Flask (Python)",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     " Introduction to Flask:Flask is a lightweight and flexible Python web framework that makes it easy to build web applications, including RESTful APIs. It provides the necessary tools and libraries to handle HTTP requests and responses efficiently.",
//     " Setting Up a Flask Project:To start building a RESTful API with Flask, you first need to set up a new project. This involves installing Flask using pip, creating a new Python file for your application, and importing the necessary modules.",
//     " Defining Routes:In Flask, routes are used to map URLs to specific functions that handle incoming requests. You can define routes for different HTTP methods such as GET, POST, PUT, and DELETE, each corresponding to a specific operation on the API.",
//     "Handling Requests and Responses:Flask provides built-in functions for handling incoming requests and generating appropriate responses. You can access request data, such as query parameters and request body, and return JSON responses to the client.",
//     " Implementing CRUD Operations:CRUD operations (Create, Read, Update, Delete) are fundamental to any RESTful API. With Flask, you can easily implement these operations by defining routes for each operation and interacting with a database using libraries like SQLAlchemy or Flask-SQLAlchemy.",
//     "Serializing Data with JSON:JSON (JavaScript Object Notation) is a popular data interchange format used in RESTful APIs. Flask allows you to serialize Python objects into JSON format and vice versa, making it easy to send and receive data between the client and server.",
//     "Adding Authentication:Securing your RESTful API is crucial, especially when dealing with sensitive data. Flask provides various methods for implementing authentication, such as token-based authentication using libraries like Flask-JWT or Flask-OAuthlib.",
//     "Testing Your API:Testing is an essential part of the development process to ensure that your API works as expected. Flask provides tools for writing and running unit tests, including libraries like Flask-Testing and pytest.",
//     "Handling Errors and Exceptions:Errors and exceptions can occur during the execution of your API, such as invalid requests or database errors. Flask allows you to handle these errors gracefully by defining error handlers and returning appropriate error responses.",
//     " Deploying Your API: Once your API is ready, you'll want to deploy it to a production environment. Flask supports various deployment options, including traditional web servers like Apache or Nginx, as well as cloud platforms like Heroku or AWS.",
//     " Monitoring and Scaling: Monitoring the performance of your API and scaling it to handle increased traffic are essential tasks for maintaining a reliable service. Flask provides tools and extensions for monitoring performance metrics and scaling your application horizontally or vertically as needed.",
// ],
// };
// let article15 = {
//     id: "random-id",
//     title: "Building a CRUD Application with Laravel (PHP)",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to Laravel:Laravel is a powerful PHP framework known for its elegant syntax and expressive features, making it an excellent choice for building web applications. It provides tools and conventions to streamline the development process, including database migrations, routing, and templating.",
//     "Setting Up a Laravel Project:To begin building a CRUD application with Laravel, you'll need to install the framework using Composer, a dependency manager for PHP. Once installed, you can create a new Laravel project using the laravel new command and configure your database connection in the .env file.",
//     "Creating Models, Views, and Controllers: Laravel follows the MVC (Model-View-Controller) architectural pattern, which separates the application's logic into models, views, and controllers. You can use the php artisan make:model, php artisan make:view, and php artisan make:controller commands to generate the necessary files for your application.",
//     "Defining Routes:Routes in Laravel define how incoming HTTP requests are handled by your application. You can define routes for different CRUD operations (e.g., GET, POST, PUT, DELETE) using the Route::get(), Route::post(), Route::put(), and Route::delete() methods in the routes/web.php file.",
//     "Implementing CRUD Operations:Laravel provides a convenient way to implement CRUD operations using its built-in Eloquent ORM (Object-Relational Mapping) and resource controllers. You can define routes and corresponding controller methods to handle create, read, update, and delete operations on your application's resources.",
//     "Working with Forms and Validation:Forms are a common way for users to interact with CRUD applications, allowing them to input data and submit it to the server. Laravel includes powerful form validation features, allowing you to define validation rules for incoming requests and display error messages to users when validation fails.",
//     "Using Blade Templating Engine:Laravel's Blade templating engine makes it easy to build dynamic and reusable views for your application. Blade templates allow you to include partials, extend layouts, and pass data from your controllers to your views, making it simple to create interactive user interfaces.",
//     "Interacting with the Database:Laravel provides a fluent query builder and Eloquent ORM for interacting with your application's database. You can use Eloquent to define relationships between models, perform CRUD operations, and execute complex queries using Laravel's expressive syntax.",
//     "Implementing Authentication and Authorization:Security is essential in any web application, and Laravel makes it easy to implement authentication and authorization features. Laravel's built-in authentication scaffolding allows you to quickly add user registration, login, and password reset functionality to your application.",
//     "Handling File Uploads and Storage:Many CRUD applications require the ability to upload and store files, such as images or documents. Laravel provides convenient methods for handling file uploads and storing files on disk or in the cloud using drivers like Amazon S3 or Google Cloud Storage.",
//     "Testing and Deployment:Testing your CRUD application ensures that it functions correctly and meets the requirements of your users. Laravel includes built-in testing tools, allowing you to write unit tests, feature tests, and browser tests using PHPUnit and Laravel Dusk. Once your application is tested and ready for production, you can deploy it to your chosen hosting environment using Laravel Forge, Envoyer, or a cloud platform like Heroku or AWS.",
// ],
// };
// let article16 = {
//     id: "random-id",
//     title: "Introduction to ASP.NET Core MVC",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Overview of ASP.NET Core MVC:ASP.NET Core MVC is a powerful web framework developed by Microsoft for building modern web applications using the Model-View-Controller (MVC) architectural pattern. It is open-source, cross-platform, and highly extensible, making it suitable for a wide range of web development projects.",
//     "Setting Up an ASP.NET Core MVC Project:To get started with ASP.NET Core MVC, you'll need to install the .NET Core SDK and create a new MVC project using the dotnet new mvc command. This will generate the necessary files and folders for your application, including controllers, views, and models.",
//     "Understanding MVC Architecture:MVC architecture divides an application into three main components: Models, Views, and Controllers. Models represent the application's data and business logic, Views are responsible for rendering the user interface, and Controllers handle incoming requests, process data, and return responses.",
//     "Defining Routes and Actions:Routes in ASP.NET Core MVC map URLs to controller actions, allowing you to define how incoming requests are handled by your application. You can define routes using attribute routing or convention-based routing and specify the HTTP methods supported by each action.",
//     "Working with Controllers:Controllers in ASP.NET Core MVC are responsible for handling user requests, processing data, and returning responses. Each controller contains a set of action methods that correspond to different HTTP endpoints in your application.",
//     "Creating Views with Razor Syntax:Views in ASP.NET Core MVC are written using Razor syntax, a combination of HTML and C# code that allows you to create dynamic and interactive user interfaces. Razor syntax makes it easy to embed C# code within your HTML markup and render data from your controllers.",
//     "Using Layouts and Partial Views:Layouts and partial views are reusable components in ASP.NET Core MVC that allow you to define common layout structures and share UI elements across multiple views. Layouts provide a consistent look and feel for your application, while partial views encapsulate specific UI functionality.",
//     "Working with Models and Data:Models in ASP.NET Core MVC represent the data and business logic of your application. You can define models using plain C# classes or entity classes that map to database tables. ASP.NET Core MVC provides built-in support for Entity Framework Core, making it easy to interact with databases.",
//     "Handling Form Submissions:Forms are a common way for users to interact with web applications, allowing them to submit data to the server for processing. ASP.NET Core MVC provides model binding and validation features, allowing you to map form data to model properties and validate user inputs.",
//     "Implementing Authentication and Authorization:Security is a critical aspect of web development, and ASP.NET Core MVC provides built-in support for authentication and authorization. You can use ASP.NET Core Identity to add user registration, login, and role-based access control to your application.",
//     "Testing and Deployment:Testing your ASP.NET Core MVC application ensures that it functions correctly and meets the requirements of your users. ASP.NET Core MVC includes built-in testing tools, allowing you to write unit tests and integration tests using xUnit and MSTest. Once your application is tested and ready for production, you can deploy it to your chosen hosting environment using tools like Azure App Service or Docker.",
// ],
// };
// let article17 = {
//     id: "random-id",
//     title: "Building a GraphQL Server with Apollo Server (Node.js)",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to GraphQL and Apollo Server:GraphQL is a query language for APIs that allows clients to request only the data they need. Apollo Server is a GraphQL server implementation for Node.js that makes it easy to build and deploy GraphQL APIs.",
//     "Setting Up a Node.js Project:To get started with Apollo Server, you'll need to initialize a new Node.js project using npm or yarn. Once your project is set up, you can install the necessary dependencies, including apollo-server-express and any other libraries you may need.",
//     "Defining a GraphQL Schema:The heart of any GraphQL server is its schema, which defines the types of data that can be queried and the operations that can be performed. With Apollo Server, you can define your schema using the GraphQL schema language or by using JavaScript objects.",
//     "Creating Resolvers:Resolvers are functions that execute GraphQL queries and mutations, fetching the requested data from your data sources. You can define resolvers for each field in your schema, mapping them to functions that return the corresponding data.",
//     "Handling Query Execution:Apollo Server handles the execution of GraphQL queries and mutations, resolving each field in the schema by invoking the appropriate resolver function. It provides tools for batching and caching queries to improve performance and reduce round trips to your data sources.",
//     "Integrating with Data Sources:GraphQL servers often need to fetch data from multiple sources, such as databases, REST APIs, or other services. Apollo Server makes it easy to integrate with these data sources using data loader patterns or by writing custom resolvers.",
//     "Implementing Authentication and Authorization:Security is a critical concern for GraphQL APIs, and Apollo Server provides middleware hooks for implementing authentication and authorization logic. You can use these hooks to validate user credentials, enforce access controls, and secure sensitive operations.",
//     "Handling File Uploads:Many applications require the ability to upload files, such as images or documents, through their GraphQL APIs. Apollo Server supports file uploads out of the box, allowing clients to send multipart/form-data requests and receive uploaded files on the server.",
//     "Optimizing Performance:Performance optimization is essential for ensuring that your GraphQL server can handle a high volume of requests efficiently. Apollo Server provides tools for monitoring performance metrics, caching frequently requested data, and implementing pagination to limit the amount of data returned in each query.",
//     "Testing Your GraphQL API:Testing is a crucial part of the development process, and Apollo Server provides tools for writing unit tests and integration tests for your GraphQL resolvers and schema. You can use libraries like Jest or Mocha to write tests that verify the behavior of your API under different scenarios.",
//     "Deploying Your GraphQL Server:Once your GraphQL server is ready for production, you'll need to deploy it to a hosting environment where it can be accessed by clients. Apollo Server can be deployed to any Node.js-compatible hosting platform, including cloud providers like AWS, Google Cloud, or Heroku.",
// ],
// };
// let article18 = {
//     id: "random-id",
//     title: "Securing your Back-End API with JWT Authentication",
//     category: "Tutorials",
//     primaryImageUrl: "https://orangematter.solarwinds.com/wp-con",
//     secondaryImageUrl: "https://img.freepik.com/free-vector/1.pn",
//     publishDate: "2024-03-01",
//     paragraphs: [
//     "Introduction to JWT Authentication:JWT authentication is a popular method for securing back-end APIs by issuing tokens to authenticated users. These tokens contain encoded information about the user and are signed to ensure their integrity.",
//     "Generating JWT Tokens:When a user logs in to your application, the server generates a JWT token containing relevant user information, such as their user ID or role. This token is then sent to the client, where it can be included in subsequent requests to authenticate the user.",
//     "Signing JWT Tokens:JWT tokens are signed using a secret key known only to the server. This ensures that the token has not been tampered with and can be trusted as authentic. When validating a token, the server verifies its signature using the same secret key.",
//     "Token-Based Authentication Workflow:In a token-based authentication workflow, clients include the JWT token in the Authorization header of their HTTP requests. The server then verifies the token and grants access to protected resources if the token is valid.",
//     "Middleware for Authentication:In Node.js applications, middleware can be used to authenticate incoming requests by verifying the JWT token included in the request headers. This middleware intercepts incoming requests and checks the validity of the token before allowing access to protected routes.",
//     "Token Expiration and Refresh:JWT tokens can have an expiration time, after which they are no longer valid. To handle token expiration, clients can include a refresh token along with the JWT token, allowing them to request a new token without requiring the user to log in again.",
//     "Protecting Routes and Resources:With JWT authentication, you can protect routes and resources in your API by requiring a valid JWT token for access. This prevents unauthorized users from accessing sensitive data or performing privileged operations.",
//     "Role-Based Access Control:JWT tokens can contain information about the user's role or permissions, allowing you to implement role-based access control in your API. This ensures that only users with the necessary privileges can access certain resources or perform specific actions.",
//     "Securing Communication with HTTPS:In addition to JWT authentication, it's essential to secure communication between clients and servers using HTTPS (HTTP Secure). This encrypts data transmitted over the network, preventing it from being intercepted or tampered with by malicious actors.",
//     "Handling Token Revocation:In some cases, you may need to revoke a JWT token before it expires, such as when a user logs out or changes their password. To handle token revocation, you can maintain a blacklist of revoked tokens on the server and check incoming tokens against this blacklist during authentication.",
//     "Best Practices for JWT Security:When implementing JWT authentication, it's essential to follow best practices to ensure the security of your API. This includes keeping secret keys secure, validating tokens carefully, and using HTTPS to protect data in transit. Additionally, you should consider using libraries or frameworks that handle JWT authentication securely and efficiently.",
// ],
// };


//data arry
const articleles =[article1,article2,article3,article4,article5,article6,article7,article8,article9,article10,article11,article12,article13,article14,article15,article16,article17,article18];


import articleles from "../../src/js/global.js";
console.log(articleles.length)



//daily trends
for (let i=0 ; i<3; i++) {
    if(articleles[i].category === "daily trends") {
        document.getElementById("article-card").innerHTML += `
        <div class="card">
        <div class="article-info">
        <h5>${articleles[i].publishDate}</h5>
        <h3>${articleles[i].title}</h3>
        <p>${articleles[i].paragraphs[0]}</p>
    </div>
    <div class="article-image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    </div>
        `
    };
};



//develpment tools
for (let i=0 ; i<articleles.length; i+=2) {
    if(articleles[i].category === "development tools") {
        document.getElementById("developmentools").innerHTML += `
        <div class="card">
        <div class="article-info">
        <h5>${articleles[i].publishDate}</h5>
        <h3>${articleles[i].title}</h3>
        <p>${articleles[i].paragraphs[0]}</p>
    </div>
    <div class="article-image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    </div>
        `
    };
};




//tutorials
for (let i=0 ; i<articleles.length; i+=2) {
    if(articleles[i].category === "Tutorials") {
        document.getElementById("Tutorials").innerHTML += `
        <div class="card">
        <div class="article-info">
        <h5>${articleles[i].publishDate}</h5>
        <h3>${articleles[i].title}</h3>
        <p>${articleles[i].paragraphs[0]}</p>
    </div>
    <div class="article-image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    </div>
        `
    };
};
