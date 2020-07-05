import { gql } from "apollo-boost"

export const schema = {

    query: gql`
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, search: $search, type:ANIME) {
                id
                coverImage {
                medium
                }
                bannerImage
                title {
                romaji
                }
            }
            }
        }
        `,

    setVariables: (searchKey,page,perPage) => ({
        
        "search": searchKey,
        "page": page,
        "perPage": perPage
    })
    
}