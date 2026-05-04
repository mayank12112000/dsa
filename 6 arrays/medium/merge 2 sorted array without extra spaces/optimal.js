/*Input : nums1 = [-5, -2, 4, 5, 0, 0, 0], nums2 = [-3, 1, 8]
Output : [-5, -3, -2, 1, 4, 5, 8]
Explanation : The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2
Input : nums1 = [0, 2, 7, 8, 0, 0, 0], nums2 = [-7, -3, -1]
Output :  [-7, -3, -1, 0, 2, 7, 8]
Explanation :  The merged array is: [-7, -3, -1, 0, 2, 7, 8], where [0, 2, 7, 8] are from nums1 and [-7, -3, -1] are from nums2 */

const nums1 = [2,0]
const m = 1
const nums2 = [1]
const n= 1
const merge = (nums1,m,nums2,n)=>{
     let i = m-1
    let zero = m+n-1
    let j = n-1
    while(i>=0 && j>=0){
        if(nums2[j]>nums1[i]){
            nums1[zero] = nums2[j]
            j--;zero--
        }else if(nums2[j]<=nums1[i]){
            nums1[zero] = nums1[i]
            i--; zero--
        }
    }
    while(j>=0){
        nums1[zero] = nums2[j]
        zero--; j--
    }
}

merge(nums1,m,nums2,n)

console.log(nums1)