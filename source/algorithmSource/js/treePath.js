var binaryTreePaths = function(root) {
    const paths = [];
    const construct_paths = (root, path) => {
        if (root) {
            path += root.val.toString();
            if (root.left === null && root.right === null) { // 当前节点是叶子节点
                paths.push(path); // 把路径加入到答案中
            } else {
                path += "->"; // 当前节点不是叶子节点，继续递归遍历
                construct_paths(root.left, path);
                construct_paths(root.right, path);
            }
        }
    }
    construct_paths(root, "");
    return paths;
};


const getPath = (root) => {
    const paths = [];
    const path_recover = (node, paths) => {
        if (!node) return;
        let path = node.val.toString();
        if (node.left === null && node.right === null) {
            paths.push(path)
        } else {
            path = "=>";
            path_recover(node.left, paths);
            path_recover(node.right, paths);
        }
    }

    path_recover(root, paths);
    return paths;
}


const obj = {
    left: {
        val: 1,
        left: {
            left: {
                val: 1
            },
            right: {
                val: 2
            }
        },
        right: {
            left: {
                left: {
                    val: 3
                },
                right: {
                    val: 4
                }
            },
            right:  {
                left: {
                    val: 5,
                    left: {
                        val: 7
                    }
                },
                right: {val: 7}
            }
        },
    },
}

console.log(getPath(obj))