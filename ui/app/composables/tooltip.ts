// export const useTooltipInfo = {
//     name: 'Project Name',
// region: 'Specify the region where your AWS compute resources are hosted',
// kb_data: 'Upload or specify the knowledge base (documents, FAQs, etc.) that the application will use for retrieving relevant information',
// gt_data: 'Provide a reference dataset or accurate responses to evaluate the model\'s performance and accuracy',
// chunking_strategy: 'Select the method for dividing input documents into smaller, manageable sections',
// chunk_size: 'Define the maximum size (in tokens) of each chunk to optimize retrieval accuracy and performance',
// chunk_overlap: 'Set the number of overlapping tokens or words between adjacent chunks to maintain context continuity',
// embedding: 'Choose whether you want the language model from the Amazon Bedrock or Sagemaker family',
// vector_dimension: 'Set the dimensionality of the vector embeddings generated for document chunks',
// indexing_algorithm: 'Select the algorithm for organizing and searching vector embeddings efficiently',
// numberOfChunksRetrieved: 'Specify how many of the most relevant chunks should be retrieved for response generation',
// n_shot_prompts: 'Define the number of examples to include in the prompt for the model during few-shot learning tasks',
// knn_num: 'Set the number of nearest neighbours to consider when searching for similar embeddings in the vector index',
// temp_retrieval_llm: 'Adjust the randomness of the model\'s output. Higher values produce more diverse outputs, while lower values yield more focused responses',
// retrieval: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
// hierarchical_parent_chunk_size: 'Set the size (in tokens) of the parent chunks for hierarchical chunking',
// hierarchical_child_chunk_size: 'Set the size (in tokens) of the child chunks for hierarchical chunking',
// hierarchical_chunk_overlap_percentage: 'Set the overlap percentage for hierarchical chunking',
// rerank_model_id: "Select an Amazon Bedrock model to reorder and refine search results from your vector store based on relevance",
// guardrails: "Guardrails are safety barriers or guidelines designed to protect, direct, or limit actions in various contexts",
// service: "Evaluation service assesses the performance, accuracy, fairness, and robustness of models ",
// ragas_embedding_llm: "Choose whether you want the language model from the Amazon Bedrock or Sagemaker family",
// ragas_inference_llm: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
// ragas_rerank_llm: "Select the rerank model to use for the evaluation",
// kb_model : "Select Knowledge base type"
// }

export const useTooltipInfo = {
    name:{
     label: 'Project Name',
     info: 'Project Name',
     },
    region: {
     label: 'Region',
     info: 'Specify the region where your AWS compute resources are hosted',
     content: '<p>AWS hosts different regions and avaibility zones in its infrastructure. When FloTorch users select particular zone such as US-East1 or US_West2</p>'
    },
    kb_data: {
     label: 'Knowledge Base Data',
     info: 'Upload or specify the knowledge base (documents, FAQs, etc.) that the application will use for retrieving relevant information.',
     content: '<p>In the context of Retrieval Augmented Generation (RAG), a "knowledge base" refers to a repository of structured information, like documents, data sets, or articles, that a large language model can access and retrieve relevant data from to enhance its responses to user queries, providing more accurate and contextually relevant answers based on specific, up-to-date information not necessarily included in its initial training data.</p>'
    },
    gt_data: {
        label: 'Ground Truth Data',
        info: 'Provide a reference dataset or accurate responses to evaluate the model\'s performance and accuracy',
        content: '<p>Ground truth data serves as a benchmark for evaluating the accuracy and performance of the model by comparing its outputs against known correct responses.</p>'
    },
    chunking_strategy: {
        label: 'Chunking',
        info: 'Select the method for dividing input documents into smaller, manageable sections.',
        content: '<div><p><a href="https://www.google.com/" class="external-link flex">Chunking<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> in Retrieval Augmented Generation (RAG) systems using Large Language Models (LLMs) is the process of dividing large documents or text corpora into smaller, manageable segments called chunks. This technique is crucial for optimizing the performance of RAG systems, which combine information retrieval with language generation to produce more accurate and contextually relevant responses.</p><h3>Key Aspects of Chunking in RAG</h3><p>Purpose: Chunking enhances the efficiency and accuracy of the retrieval process, which directly impacts the overall performance of RAG models.</p><p>Improved Retrieval: By breaking down information into smaller units, chunking allows for faster and more precise identification of relevant content.</p><p>Enhanced Generation: Well-defined chunks provide the generator with necessary context, leading to more coherent and contextually rich responses.</p><p>Scalability: Chunking enables efficient management of massive datasets, as each chunk can be individually indexed and maintained.</p><h3>Common Chunking Strategies</h3><p>Fixed-size Chunking: Divides text into uniform chunks based on a predefined character count.Currently fixed-size chunking is supported in FloTorch.</p><p>Semantic Chunking: Breaks text into semantically coherent segments, preserving contextual integrity.</p><p>Token-based Chunking: Segments text based on a specific number of tokens, which is particularly useful for LLMs with token limits.</p><p>Hierarchical Chunking: Hierarchical chunking is an advanced technique used in Retrieval-Augmented Generation (RAG) systems to optimize the processing of large datasets. This method involves dividing documents into multiple levels of chunks, typically ranging from larger to smaller sizes Currently hierarchical chunking is supported in FloTorch.</p><p>Effective chunking is essential for RAG systems as it directly influences retrieval precision, response quality, and computational efficiency3. The choice of chunking strategy depends on factors such as document structure, application requirements, and the desired balance between semantic integrity and processing speed.</p></div>'
    },
    chunk_size: {
        label: 'Chunk Size',
        info: 'Define the maximum size (in tokens) of each chunk to optimize retrieval accuracy and performance.',
        content: '<p><a href="https://www.google.com/" class="external-link flex">Chunk size<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> in RAG (Retrieval Augmented Generation) systems refers to the number of words or tokens used to divide large documents into smaller, manageable segments for efficient information retrieval. It is a critical parameter that significantly impacts the performance and effectiveness of RAG systems.</p><h3>Chunk size matters for several reasons:</h3><p>Relevance and granularity: Smaller chunk sizes (e.g., 128 tokens) provide more granular information but risk missing vital context. Larger sizes (e.g., 512 tokens) often capture more comprehensive information1.</p><p>Retrieval accuracy: Smaller chunks allow for more precise matching and retrieval of relevant information, improving the system\'s ability to find specific details8.</p><p>Context preservation: Larger chunks provide broader context, which can be beneficial for tasks requiring more comprehensive understanding2.</p><p>Computational efficiency: Smaller chunks generally lead to faster retrieval times, but too many small chunks can increase search complexity.</p><p>Response quality: The chunk size affects the faithfulness and relevancy of the generated responses. Studies have shown that a chunk size of 1024 tokens can provide an optimal balance between response time and quality.</p><h3>The ideal chunk size varies depending on factors such as:</h3><p>The nature and structure of the source documents</p><p>The specific task or query types</p><p>The desired balance between precision and context</p><p>The computational resources available</p><p>We suggest starting with a chunk size of around 256 tokens (approximately 1024 characters) and then experimenting to find the optimal size for a specific use case. It\'s important to note that chunk sizes can vary within a dataset, allowing for flexibility based on the information density of different sections or paragraphs.</p>'
    },
    chunk_overlap: {
        label: 'Chunk Overlap',
        info: 'Set the number of overlapping tokens or words between adjacent chunks to maintain context continuity.',
        content: '<p>Chunk percentage overlap refers to the proportion of content shared between consecutive text chunks when a document is split for indexing and retrieval. It\'s a crucial parameter that impacts both the indexing process and the quality of information retrieved. &#160;</p><h3>How Chunking and Overlap Work?</h3><p>Document Splitting: A large document is divided into smaller, manageable units called &quot;chunks.&quot; These chunks are the units of information that the RAG system will retrieve. &#160;</p><p>Overlap: Instead of creating chunks with completely distinct content, a certain percentage of text is shared or overlapped between adjacent chunks. For example, a 20% overlap means that the last 20% of a chunk is identical to the first 20% of the following chunk. &#160;</p><p><h3>Impact on Indexing:</h3></p><p>Increased Redundancy: Overlapping chunks introduce redundancy into the index. The same content is indexed multiple times (across different chunks). This increases the size of the index.</p><p>More Comprehensive Context: Overlap ensures that important contextual information isn\'t lost at chunk boundaries. If a sentence or key phrase spans across two chunks, the overlap ensures that both chunks contain enough context to be meaningful. &#160;</p><p>Improved Retrieval: During retrieval, the query might match content within the overlapping portion of two chunks. This increases the chances of retrieving relevant information, even if the most relevant sentence is split across chunks.</p>'
    },
    embedding: {
        label: 'Embedding',
        info: 'Choose whether you want the language model from the Amazon Bedrock or Sagemaker family',
        content: '<p>An embedding model in RAG systems is a specialized neural network that converts text (documents, queries, or sentences) into dense numerical vectors - essentially mapping words and phrases into points in a high-dimensional space. These models serve dual purposes in RAG: converting knowledge base documents into vector representations and transforming user queries into the same vector space. This allows the system to find relevant documents by measuring the similarity between the query vector and document vectors in this mathematical space. The choice of embedding model significantly impacts RAG system performance through several key factors. Better models capture more nuanced semantic relationships, leading to more accurate document retrieval. Domain-specific models (like those trained on medical or legal text) often outperform general-purpose embeddings in specialized fields. Additionally, practical considerations like dimensionality, computational requirements, language support, and cost all influence the selection.</p>'
    },
    vector_dimension: {
        label: 'Vector Dimension',
        info: 'Set the dimensionality of the vector embeddings generated for document chunks',
        content: '<p>Vector dimensions in RAG (Retrieval Augmented Generation) systems refer to the size or length of the numerical vectors that represent text or other data after being processed by an embedding model. For example, OpenAI\'s text-embedding-3-small model produces vectors with 1536 dimensions, while some other models might create vectors with 384 or 768 dimensions. Each dimension captures different semantic features of the input text, with higher-dimensional vectors generally capable of representing more nuanced semantic relationships, though this comes with increased computational and storage costs. The choice of embedding model and its vector dimensions has significant implications for both system performance and resource requirements. Higher-dimensional vectors typically provide better semantic representation and can lead to more accurate similarity searches, but they require more storage space in vector databases and more computational resources for similarity calculations. For instance, a vector database storing millions of 1536-dimensional vectors will need substantially more storage space and memory compared to one storing 384-dimensional vectors. This trade-off between representation quality and resource efficiency is particularly important when scaling RAG systems to handle large document collections. Vector databases are specifically optimized to handle these high-dimensional vectors efficiently, using specialized indexing techniques like HNSW (Hierarchical Navigable Small World) or IVF (Inverted File Index) to enable fast similarity searches. The dimensionality of the vectors directly impacts the index size and search performance. For example, Pinecone, Weaviate, and other vector databases often recommend specific index configurations based on the vector dimensions of your chosen embedding model. When selecting an embedding model, it\'s crucial to consider not just the raw accuracy metrics but also how well your chosen vector database can handle the resulting vector dimensions in terms of both search performance and cost efficiency.</p>'
    },
    indexing_algorithm: {
        label: 'Indexing Algorithm',
        info: 'Select the algorithm for organizing and searching vector embeddings efficiently',
        content: '<p>HNSW (Hierarchical Navigable Small World) is a graph-based algorithm for finding approximate nearest neighbors (ANN), crucial for tasks like document retrieval in RAG systems. It constructs a multi-layered graph where each layer represents the data at different granularities. The top layer is sparse with long-range connections for fast coarse search, while lower layers become progressively denser with shorter-range connections for refined local search. When inserting a new data point, it\'s connected to its nearest neighbors in each layer, creating a &quot;navigable small world&quot; structure.</p><p>Searching starts at a random point in the top layer and navigates down to the bottom layer, following connections to closer neighbors at each level. This hierarchical approach allows for efficient exploration of the data space. At the bottom layer, a final search among candidate neighbors yields the approximate nearest neighbors. HNSW is particularly useful in RAG because it efficiently finds similar vector embeddings, representing documents and queries, enabling fast retrieval of relevant context for generating responses.</p><p>Key features: Hierarchical structure, navigable small world connections, approximate nearest neighbors, scalability, dynamic updates. RAG relevance: Efficient retrieval of similar document embeddings for context retrieval, crucial for fast and accurate response generation.</p>'
    },
    numberOfChunksRetrieved: {
        label: 'Number of Chunks Retrieved',
        info: 'Specify how many of the most relevant chunks should be retrieved for response generation',
    },
    n_shot_prompts: {
        label: 'N-Shot Prompts',
        info: 'Define the number of examples to include in the prompt for the model during few-shot learning tasks',
        content: '<p>Yes, N-shot prompting can work in Retrieval-Augmented Generation (RAG) systems, but its effectiveness depends on the use case. Here&rsquo;s how it applies:</p><p><h3>How N-Shot Prompting Works in RAG</h3> RAG involves retrieving relevant documents and then using a language model (LLM) to generate responses. You can enhance RAG with N-shot prompting by including relevant examples in the prompt before passing it to the model.</p><p><h3>Key Considerations for N-Shot in RAG</h3> Example Relevance &ndash; The selected examples should closely resemble the query or demonstrate the expected response format. Token Limitations &ndash; More examples mean a longer prompt, potentially reducing room for retrieved context. Balancing Retrieval and Prompting &ndash; If retrieval is strong, fewer examples may be needed. If retrieval is weak, more examples might help guide the response. <h3>How Many Examples for N-Shot?</h3> 1-shot &ndash; Useful when examples provide structured guidance without overwhelming the model. 2-3 shot &ndash; Effective for complex or nuanced queries where variations matter. More than 3 &ndash; Only viable if you have enough token space and the task benefits from multiple examples. Currently not supported in FloTorch.</p>'
    },
    knn_num: {
        label: 'KNN Number',
        info: 'Set the number of nearest neighbours to consider when searching for similar embeddings in the vector index',
        content: '<p>K-Nearest Neighbors (KNN) parameter determines how many documents or embeddings are retrieved from the vector database before being passed to the language model for answer generation. Choosing the right value for K is crucial because it impacts accuracy, cost, and latency. A higher K increases the chances of retrieving relevant context, improving accuracy, but also raises computational cost and response time. Conversely, a lower K reduces retrieval noise and speeds up inference but may omit important information.</p><h3>Key Impacts of KNN Parameter:</h3> Answer Accuracy: Higher K provides more context but may introduce irrelevant data, diluting precision. Lower K ensures focused retrieval but risks missing critical information. Cost Considerations: More retrieved documents mean higher computational cost in vector search and LLM token processing. Optimal K balances quality and efficiency to avoid unnecessary API or compute expenses. Latency &amp; Performance: Large K values increase processing time in retrieval and model inference. Smaller K speeds up response but may compromise completeness. A good approach is experimenting with different K values (e.g., K=3, K=5, K=10) and evaluating answer relevance against cost and latency trade-offs. Adaptive K selection, where K varies based on query complexity, can further optimize results.</p>'
    },
    temp_retrieval_llm: {
        label: 'Temperature Retrieval LLM',
        info: 'Adjust the randomness of the model\'s output. Higher values produce more diverse outputs, while lower values yield more focused responses',
        content: '<p>The temperature setting controls the randomness of the model\'s responses. A lower temperature (e.g., 0 to 0.3) makes the model more deterministic, meaning it will stick closely to retrieved documents and produce highly factual, consistent answers. A higher temperature (e.g., 0.7 or higher) increases diversity and creativity, making responses more exploratory but also introducing a higher risk of hallucinations. For RAG applications focused on accuracy and reliability, such as legal or financial question-answering, keeping the temperature low is typically best. Conversely, for brainstorming or content generation, a higher temperature can be useful.</p><p>The choice of temperature impacts multiple aspects of the system:</p><p>Accuracy: Lower temperatures improve factual consistency by reducing randomness, making the model adhere closely to retrieved data. Cost: A lower temperature may reduce token usage in iterative calls (fewer retries for corrections), but temperature itself doesn\'t directly affect API costs. Latency: Lower temperatures can lead to faster response times, as deterministic outputs require fewer adjustments, whereas high-temperature responses may generate longer or more variable outputs. For most enterprise RAG systems, where factual correctness is critical, a temperature between 0.0 and 0.2 is generally recommended.</p>'
    },
    retrieval: {
        label: 'Retrieval',
        info: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
        content: '<p>How do you select the right inferencing model for your RAG system?  Here\'s a systematic approach: First, consider your key requirements:</p><p>1. Response speed needed (latency requirements) 2. Cost constraints and budget 3. Accuracy requirements 4. Context window size needed for your documents 5. Whether you need specialized knowledge in certain domains 6. Deployment constraints (on-premise vs cloud)</p><p>Evaluation methodology:</p><p>Instead of choosing a model based on general benchmarks alone, we recommend:</p><p>1. Creating a representative test set from your actual data and uploading it in FloTorch 2. Defining clear evaluation metrics relevant to your use case (accuracy, consistency, relevance) 3. Running controlled A/B tests with different models using FloTorch</p><p>Specific model selection strategies:</p><p>1. Start with smaller models (like Mistral 7B or Llama 3 ) as baselines 2. Test mid-size models (like Nova Lite, Claude Haiku or GPT-3.5) for balance of performance/cost 3. Only move to larger models (like Nova Pro, GPT-4 or Claude Opus) if smaller ones don\'t meet requirements 4. Consider fine-tuning smaller models on your domain if you have enough data on SageMaker or similar.</p><p>Key metrics to track:</p><p>1. Answer relevance (Supported in FloTorch) 2. Contenxt Precision (Supported in FloTorch) 3. Response consistency  4. Hallucination rate (Check actual answers and ground truth in FloTorch) 5. Latency per query (look at inferencing time) 6. Cost per query (look at cost breakdown)</p><p>Practical tips:</p><p>1. Run separate evaluations for different query types 2. Test with different prompt templates 3. Measure performance with different retrieval counts 4. Consider hosting costs and infrastructure requirements 5. Test model performance with and without retrieved context</p>'
    },
    hierarchical_parent_chunk_size: {
        label: 'Hierarchical Parent Chunk Size',
        info: 'Set the size (in tokens) of the parent chunks for hierarchical chunking',
    },
    hierarchical_child_chunk_size: {
        label: 'Hierarchical Child Chunk Size',
        info: 'Set the size (in tokens) of the child chunks for hierarchical chunking',
    },
    hierarchical_chunk_overlap_percentage: {
        label: 'Hierarchical Chunk Overlap Percentage',
        info: 'Set the overlap percentage for hierarchical chunking',
    },
    rerank_model_id: {
        label: 'Rerank Model ID',
        info: "Select an Amazon Bedrock model to reorder and refine search results from your vector store based on relevance",
        content: '<p>Reranking models serve several key purposes:</p><p>Initial retrieval limitations: Vector similarity search (like embedding-based retrieval) can miss semantically relevant results since it primarily captures high-level semantic similarity. For example, if you search for &quot;What causes headaches?&quot;, vector search might return passages about general pain rather than headache-specific information.</p><p>Quality refinement: Rerankers can consider more nuanced aspects of relevance by:</p><p>Looking at exact term matches and word order Understanding question-answer relationships better Considering document structure and context Evaluating factual alignment</p><p>To determine if you need reranking, evaluate these factors:</p><p>Quality Assessment:</p><p>Run sample queries and check if the initial retrieval results are sufficiently relevant Look for cases where obviously relevant documents are ranked too low Check if the results contain too many false positives Task Characteristics: High-precision requirements (medical, legal) &rarr; Likely need reranking Simple keyword-based queries &rarr; Might not need reranking Complex questions requiring inference &rarr; Would benefit from reranking</p><p> Cost-Benefit Analysis:</p><p>Consider computational overhead - reranking adds latency Evaluate if accuracy improvement justifies additional complexity Consider available resources (compute, time, budget)</p>'
    },
    guardrails: {
        label: 'Guardrails',
        info: "Guardrails are safety barriers or guidelines designed to protect, direct, or limit actions in various contexts",
        content: '<p>Safety guardrails are essential for RAG systems to ensure the accuracy, reliability, and ethical use of AI-generated content. These guardrails help mitigate several risks: Prevent hallucinations and factual errors. Block undesirable and harmful content Protect user privacy by filtering out personal information Ensure contextual integrity and relevance of responses Maintain compliance with responsible AI policies</p><p>Several providers offer guardrail services for RAG systems: NVIDIA NeMo Guardrails: A toolkit and microservice for integrating security layers into RAG applications1. Amazon Bedrock Guardrails: Provides configurable safeguards for building generative AI applications at scale, offering industry-leading safety protections. Bedrock Guardrails are already supported in FloTorch. Llama-Guard: An advanced guardrail model that evaluates content after the retrieval and generation phases.</p><p>These guardrail services help enterprises strike a balance between delivering relevant content and ensuring real-time responses while maintaining safety and security in their RAG applications</p>'
    },
    service: {
        label: 'Service',
        info: "Evaluation service assesses the performance, accuracy, fairness, and robustness of models ",
    },
    ragas_embedding_llm: {
        label: 'RAGAS Embedding LLM',
        info: "Choose whether you want the language model from the Amazon Bedrock or Sagemaker family",
    },
    ragas_inference_llm: {
        label: 'RAGAS Inference LLM',
        info: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
    },
    ragas_rerank_llm: {
        label: 'RAGAS Rerank LLM',
        info: "Select the rerank model to use for the evaluation",
    },
    kb_model : {
        label: 'KB Model',
        info: "Select Knowledge base type"
    }
    }
    
